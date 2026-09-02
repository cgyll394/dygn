import type { Lang } from "@/lib/i18n"

const sv = {
  metaTitle: "Formuleringen: åtta näringsämnen, förklarade | DYGN",
  metaDescription:
    "Varje näringsämne i DYGN: varför det ingår, vilken form vi valt och varför dosen är vad den är. Allt deklarerat.",
  eyebrow: "Formuleringen",
  heading: "Varje ämne. Varje dos. Förklarat.",
}

const en: typeof sv = {
  metaTitle: "The formula: eight nutrients, explained | DYGN",
  metaDescription:
    "Every nutrient in DYGN: why it is included, which form we chose and why the dose is what it is. Everything declared.",
  eyebrow: "The formula",
  heading: "Every nutrient. Every dose. Explained.",
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
