"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ComponentProps, ReactNode } from "react"
import { useLang } from "@/components/lang-provider"
import { isLang, localePath } from "@/lib/i18n"

/**
 * Intern länk som håller sig kvar i rätt "spår". På v2-sidorna (/v2, /v2/produkt …)
 * prefixas alla interna mål automatiskt med /v2, så navigeringen inte hoppar tillbaka
 * till v1. På v1-sidorna beter den sig precis som en vanlig localePath-länk.
 *
 * `to` anges alltid prefixlöst och utan språk, t.ex. "/produkt", "/#faq" eller "/".
 */
export function NavLink({
  to,
  children,
  ...rest
}: { to: string; children: ReactNode } & Omit<ComponentProps<typeof Link>, "href">) {
  const lang = useLang()
  const pathname = usePathname()

  const segments = pathname.split("/").filter(Boolean)
  const afterLang = isLang(segments[0]) ? segments[1] : segments[0]
  const inV2 = afterLang === "v2"

  let path = to
  if (inV2) {
    if (to === "/") path = "/v2"
    else if (to.startsWith("/#")) path = `/v2${to.slice(1)}`
    else path = `/v2${to}`
  }

  return (
    <Link href={localePath(lang, path)} {...rest}>
      {children}
    </Link>
  )
}
