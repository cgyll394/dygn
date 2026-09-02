import { NextResponse } from "next/server"
import { DEFAULT_LANG, isLang } from "@/lib/i18n"
import { storefrontFetch } from "@/lib/shopify"
import { COPY } from "./route.copy"

const MUTATION = `mutation NewsletterSignup($input: CustomerCreateInput!) {
  customerCreate(input: $input) {
    customer { id }
    customerUserErrors { code message }
  }
}`

type CustomerCreateResult = {
  customerCreate: {
    customer: { id: string } | null
    customerUserErrors: { code: string | null; message: string }[]
  } | null
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}) as Record<string, unknown>)
  const email = typeof body.email === "string" ? body.email.trim() : ""
  const company = typeof body.company === "string" ? body.company : ""
  // Formuläret skickar med sitt språk så att felmeddelandena matchar sidan
  const requestedLang: unknown = body.lang
  const lang = isLang(requestedLang) ? requestedLang : DEFAULT_LANG
  const t = COPY[lang]

  // Honeypot: fältet är osynligt för människor, bara botar fyller i det
  if (company) return NextResponse.json({ ok: true })

  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json({ ok: false, error: t.invalidEmail }, { status: 400 })
  }

  try {
    const data = await storefrontFetch<CustomerCreateResult>({
      query: MUTATION,
      variables: {
        input: {
          email,
          // Kunden sätter aldrig detta lösenord; konto kan aktiveras via
          // lösenordsåterställning. Shopify tillåter max 40 tecken.
          password: crypto.randomUUID(),
          acceptsMarketing: true,
        },
      },
    })

    const result = data.customerCreate
    const alreadyOnList = result?.customerUserErrors.some((e) => e.code === "TAKEN")
    if (result?.customer || alreadyOnList) {
      return NextResponse.json({ ok: true })
    }
    return NextResponse.json({ ok: false, error: t.genericError }, { status: 502 })
  } catch {
    return NextResponse.json({ ok: false, error: t.genericError }, { status: 502 })
  }
}
