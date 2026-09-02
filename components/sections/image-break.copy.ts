import type { Lang } from "@/lib/i18n"

const sv = {
  sectionLabel: "DYGN i rörelse",
  imageAlt: "Löpare sitter på en läktare med en DYGN-sachet i handen",
  heading: "En sachet om dagen. Det är hela metoden.",
}

const en: typeof sv = {
  sectionLabel: "DYGN in motion",
  imageAlt: "Runner sitting in the stands with a DYGN sachet in hand",
  heading: "One sachet a day. That is the whole method.",
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
