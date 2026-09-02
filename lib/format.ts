import { INTL_LOCALE, type Lang } from "@/lib/i18n"

/** "349 kr" på svenska, "SEK 349" på engelska. */
export function formatMoney(amount: string | number, currencyCode: string, lang: Lang): string {
  const value = typeof amount === "string" ? Number.parseFloat(amount) : amount
  return new Intl.NumberFormat(INTL_LOCALE[lang], {
    style: "currency",
    currency: currencyCode,
    maximumFractionDigits: 0,
  }).format(value)
}

export function perDay(amount: string, currencyCode: string, servings: number, lang: Lang): string {
  return formatMoney(Number.parseFloat(amount) / servings, currencyCode, lang)
}
