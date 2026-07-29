import { NextRequest, NextResponse } from "next/server"

const COOKIE = "dygn_access"

async function sha256(value: string) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value))
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
}

export async function proxy(request: NextRequest) {
  // No SITE_PASSWORD set -> site is open (e.g. after launch: just remove the env var)
  const password = process.env.SITE_PASSWORD
  if (!password) return NextResponse.next()

  const { pathname } = request.nextUrl
  if (pathname === "/las" || pathname === "/api/unlock") return NextResponse.next()

  const cookie = request.cookies.get(COOKIE)?.value
  if (cookie && cookie === (await sha256(password))) return NextResponse.next()

  const url = request.nextUrl.clone()
  url.pathname = "/las"
  url.search = ""
  return NextResponse.redirect(url)
}

export const config = {
  // Everything except Next internals and static files (paths containing a dot)
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
}
