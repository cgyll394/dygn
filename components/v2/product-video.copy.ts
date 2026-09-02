import type { Lang } from "@/lib/i18n"

const sv = {
  eyebrow: "I glaset",
  heading: "Löses i vatten.",
  text: "En sachet, ett glas kallt vatten, rör om och drick. Klart på under en minut.",
  videoAria: "En DYGN-sachet hälls ner i ett glas vatten och löses upp",
}

const en: typeof sv = {
  eyebrow: "In the glass",
  heading: "Dissolves in water.",
  text: "One sachet, a glass of cold water, stir and drink. Done in under a minute.",
  videoAria: "A DYGN sachet being poured into a glass of water and dissolving",
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
