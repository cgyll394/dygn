import { NextRequest, NextResponse } from "next/server"
import { DEFAULT_LANG, isLang, LANG_COOKIE, localePath, type Lang } from "@/lib/i18n"

const ACCESS_COOKIE = "dygn_access"

/**
 * Två jobb:
 *
 * 1. Språk. Svenska ligger utan prefix ("/produkt"), engelska under "/en".
 *    Prefix-lösa URL:er skrivs om internt till app/[lang]/... (URL:en förblir
 *    "/produkt"). Besökare utanför Sverige (IP-land från Vercel) skickas till
 *    "/en/..." om de inte själv valt språk (cookien dygn_lang). Sökrobotar
 *    styrs aldrig om: de crawlar från USA och skulle annars aldrig se den
 *    svenska sajten. De hittar /en via hreflang.
 *
 * 2. Pre-launch-gate: LAUNCH_MODE=waitlist + SITE_PASSWORD satta. Publikt
 *    visar "/" väntelistan (rewrite), allt annat kräver lösenordscookien.
 *    Lanseringsdagen: ta bort LAUNCH_MODE i Vercel och redeploya.
 */

const OPEN_PATHS = new Set(["/las", "/api/unlock", "/api/newsletter"])

const BOT_UA =
  /bot|crawl|spider|slurp|facebookexternalhit|whatsapp|telegram|discord|slack|linkedin|twitter|pinterest|embedly|lighthouse|headlesschrome/i

async function sha256(value: string) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value))
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
}

/** "/en/produkt" → { pathLang: "en", path: "/produkt" }; "/produkt" → { pathLang: null, path: "/produkt" } */
function splitLang(pathname: string): { pathLang: Lang | null; path: string } {
  const segments = pathname.split("/")
  const first = segments[1]
  if (isLang(first)) {
    const rest = segments.slice(2).join("/")
    return { pathLang: first, path: rest ? `/${rest}` : "/" }
  }
  return { pathLang: null, path: pathname }
}

function preferredLang(request: NextRequest): Lang {
  const chosen = request.cookies.get(LANG_COOKIE)?.value
  if (isLang(chosen)) return chosen
  if (BOT_UA.test(request.headers.get("user-agent") ?? "")) return DEFAULT_LANG
  const country = request.headers.get("x-vercel-ip-country")
  if (country && country !== "SE" && country !== "XX") return "en"
  return DEFAULT_LANG
}

/** Pre-launch-gaten. Ett svar om besökaren ska stoppas, annars null. */
async function gate(request: NextRequest, path: string, lang: Lang): Promise<NextResponse | null> {
  const password = process.env.SITE_PASSWORD
  if (process.env.LAUNCH_MODE !== "waitlist" || !password) return null
  if (OPEN_PATHS.has(path)) return null

  const cookie = request.cookies.get(ACCESS_COOKIE)?.value
  if (cookie && cookie === (await sha256(password))) return null

  const url = request.nextUrl.clone()
  // Publik besökare: startsidan blir väntelistan, URL:en förblir "/"
  if (path === "/" || path === "/waitlist") {
    url.pathname = `/${lang}/waitlist`
    return NextResponse.rewrite(url)
  }
  url.pathname = localePath(lang, "/las")
  url.search = ""
  return NextResponse.redirect(url)
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // API-routes har inget språk men samma gate som resten av sajten
  if (pathname.startsWith("/api/")) {
    return (await gate(request, pathname, DEFAULT_LANG)) ?? NextResponse.next()
  }

  const { pathLang, path } = splitLang(pathname)

  // "/sv/..." är ingen publik URL: svenska ligger utan prefix
  if (pathLang === DEFAULT_LANG) {
    const url = request.nextUrl.clone()
    url.pathname = path
    return NextResponse.redirect(url, 308)
  }

  const lang = pathLang ?? preferredLang(request)

  // v2 är numera huvudsidan — peka om gamla /v2-länkar till motsvarande sida.
  if (path === "/v2" || path.startsWith("/v2/")) {
    const url = request.nextUrl.clone()
    url.pathname = localePath(lang, path.slice(3) || "/")
    return NextResponse.redirect(url, 308)
  }

  // Engelsk besökare på en prefix-lös URL → "/en/...". Tillfällig redirect:
  // "/" är fortfarande den svenska sidan för alla andra.
  if (!pathLang && lang !== DEFAULT_LANG) {
    const url = request.nextUrl.clone()
    url.pathname = localePath(lang, path)
    return NextResponse.redirect(url, 307)
  }

  const gated = await gate(request, path, lang)
  if (gated) return gated

  // Öppet läge: /waitlist ska inte ligga kvar som egen sida
  if (path === "/waitlist") {
    const url = request.nextUrl.clone()
    url.pathname = localePath(lang, "/")
    url.search = ""
    return NextResponse.redirect(url)
  }

  // "/en/..." matchar app/[lang] direkt
  if (pathLang) return NextResponse.next()

  // Svenska: skriv om till /sv/... internt, URL:en förblir prefix-lös
  const url = request.nextUrl.clone()
  url.pathname = path === "/" ? `/${DEFAULT_LANG}` : `/${DEFAULT_LANG}${path}`
  return NextResponse.rewrite(url)
}

export const config = {
  // Allt utom Next-interna filer och statiska filer (paths med punkt)
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
}
