import type { Lang } from "@/lib/i18n"

const sv = {
  sectionLabel: "DYGN i rörelse",
  imageAlt: "Löpare håller upp en DYGN-sachet och vattenflaska efter ett pass",
  heading: "En sachet om dagen. Det är hela metoden.",
}

const en: typeof sv = {
  sectionLabel: "DYGN in motion",
  imageAlt: "Runner holding up a DYGN sachet and a water bottle after a workout",
  heading: "One sachet a day. That’s the whole method.",
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
