import type { Lang } from "@/lib/i18n"

const sv = {
  imageAlt: "Löpare med en DYGN-sachet vid vattnet i Stockholm en vintermorgon",
  eyebrow: "Tillverkad i Sverige",
  heading: "Grunden kroppen behöver. Varje dygn.",
  cta: "Förbeställ DYGN",
  note: "Från 10 kr per dag · 30 dagars öppet köp",
}

const en: typeof sv = {
  imageAlt: "Runner with a DYGN sachet by the water in Stockholm on a winter morning",
  eyebrow: "Made in Sweden",
  heading: "The foundation your body needs. Every day.",
  cta: "Pre-order DYGN",
  note: "From SEK 10 per day · 30-day money-back guarantee",
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
