"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLang } from "@/components/lang-provider"
import { DEFAULT_LANG, LANG_COOKIE, localePath, type Lang } from "@/lib/i18n"

const LABEL: Record<Lang, { short: string; long: string; title: string }> = {
  sv: { short: "SV", long: "Svenska", title: "Byt till svenska" },
  en: { short: "EN", long: "English", title: "Switch to English" },
}

/**
 * Länk till samma sida på det andra språket. Sparar valet i en cookie så att
 * proxyn slutar välja språk på IP-land för den här besökaren.
 */
export function LangSwitch({ variant = "short", className = "" }: { variant?: "short" | "long"; className?: string }) {
  const lang = useLang()
  const pathname = usePathname()
  const other: Lang = lang === "sv" ? "en" : "sv"

  // Sökvägen utan språkprefix ("/en/produkt" → "/produkt")
  const bare = lang === DEFAULT_LANG ? pathname : pathname.replace(new RegExp(`^/${lang}(?=/|$)`), "") || "/"

  function remember() {
    document.cookie = `${LANG_COOKIE}=${other}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`
  }

  return (
    <Link
      href={localePath(other, bare)}
      hrefLang={other}
      lang={other}
      onClick={remember}
      title={LABEL[other].title}
      className={className}
    >
      {LABEL[other][variant]}
    </Link>
  )
}
