import type { Lang } from "@/lib/i18n"

const sv = {
  items: [
    "Immunförsvar",
    "Minskad trötthet",
    "Energi",
    "Nervsystem",
    "Muskelfunktion",
    "Starka ben",
    "Elektrolytbalans",
    "En sachet om dagen",
    "Fri frakt",
    "Nöjd kund-garanti",
  ],
}

const en: typeof sv = {
  items: [
    "Immune system",
    "Less fatigue",
    "Energy",
    "Nervous system",
    "Muscle function",
    "Strong bones",
    "Electrolyte balance",
    "One sachet a day",
    "Free shipping",
    "Money-back guarantee",
  ],
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
