/**
 * Språk: svenska är default och ligger utan prefix ("/produkt"),
 * engelska ligger under "/en" ("/en/produkt"). proxy.ts skriver om
 * prefix-lösa URL:er till app/[lang] internt och väljer språk på IP-land.
 */
export const LANGS = ["sv", "en"] as const
export type Lang = (typeof LANGS)[number]

export const DEFAULT_LANG: Lang = "sv"

/** Sätts när besökaren själv byter språk. Vinner alltid över IP-landet. */
export const LANG_COOKIE = "dygn_lang"

export function isLang(value: unknown): value is Lang {
  return typeof value === "string" && (LANGS as readonly string[]).includes(value)
}

/** Intern länk i rätt språkversion. Ankare ("#kop") och externa länkar lämnas orörda. */
export function localePath(lang: Lang, path: string): string {
  if (lang === DEFAULT_LANG || !path.startsWith("/")) return path
  if (path === "/") return `/${lang}`
  if (path.startsWith("/#")) return `/${lang}${path.slice(1)}`
  return `/${lang}${path}`
}

/** canonical + hreflang för en sida. Sökvägen anges utan språkprefix. */
export function alternatesFor(lang: Lang, path: string) {
  return {
    canonical: localePath(lang, path),
    languages: {
      sv: localePath("sv", path),
      en: localePath("en", path),
      "x-default": localePath(DEFAULT_LANG, path),
    },
  }
}

export const INTL_LOCALE: Record<Lang, string> = { sv: "sv-SE", en: "en-GB" }
export const OG_LOCALE: Record<Lang, string> = { sv: "sv_SE", en: "en_US" }
/** Shopify Storefront API LanguageCode */
export const SHOPIFY_LANGUAGE: Record<Lang, "SV" | "EN"> = { sv: "SV", en: "EN" }
