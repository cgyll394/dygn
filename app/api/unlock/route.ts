import { createHash } from "crypto"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const form = await request.formData()
  const password = form.get("password")
  const expected = process.env.SITE_PASSWORD

  const url = request.nextUrl.clone()
  url.search = ""

  if (!expected || typeof password !== "string" || password !== expected) {
    url.pathname = "/las"
    url.search = "?fel=1"
    return NextResponse.redirect(url, 303)
  }

  url.pathname = "/"
  const res = NextResponse.redirect(url, 303)
  res.cookies.set("dygn_access", createHash("sha256").update(expected).digest("hex"), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  })
  return res
}
