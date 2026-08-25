import { NextRequest, NextResponse } from "next/server"

const COOKIE = "dygn_access"

/**
 * Pre-launch mode: LAUNCH_MODE=waitlist + SITE_PASSWORD satta.
 * Publikt: "/" visar väntelistan (rewrite till /waitlist), allt annat
 * kräver lösenordscookien. Utan LAUNCH_MODE=waitlist är hela sajten öppen.
 * Lanseringsdagen: ta bort LAUNCH_MODE i Vercel och redeploya.
 */

async function sha256(value: string) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value))
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
}

const OPEN_PATHS = new Set(["/las", "/api/unlock", "/api/newsletter"])

export async function proxy(request: NextRequest) {
  const password = process.env.SITE_PASSWORD
  if (process.env.LAUNCH_MODE !== "waitlist" || !password) {
    // Öppet läge: /waitlist ska inte ligga kvar som egen sida
    if (request.nextUrl.pathname === "/waitlist") {
      const url = request.nextUrl.clone()
      url.pathname = "/"
      url.search = ""
      return NextResponse.redirect(url)
    }
    return NextResponse.next()
  }

  const { pathname } = request.nextUrl
  if (OPEN_PATHS.has(pathname)) return NextResponse.next()

  const cookie = request.cookies.get(COOKIE)?.value
  if (cookie && cookie === (await sha256(password))) return NextResponse.next()

  // Publik besökare: startsidan blir väntelistan, URL:en förblir "/"
  if (pathname === "/" || pathname === "/waitlist") {
    const url = request.nextUrl.clone()
    url.pathname = "/waitlist"
    return NextResponse.rewrite(url)
  }

  const url = request.nextUrl.clone()
  url.pathname = "/las"
  url.search = ""
  return NextResponse.redirect(url)
}

export const config = {
  // Allt utom Next-interna filer och statiska filer (paths med punkt)
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
}
