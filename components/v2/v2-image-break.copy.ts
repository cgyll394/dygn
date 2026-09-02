import type { Lang } from "@/lib/i18n"

const sv = {
  sectionLabel: "DYGN i rörelse",
  imageAlt: "En DYGN Daily Essentials-ask balanserar på ett finger",
  heading: "En sachet om dagen. Det är hela metoden.",
}

const en: typeof sv = {
  sectionLabel: "DYGN in motion",
  imageAlt: "A DYGN Daily Essentials box balancing on a fingertip",
  heading: "One sachet a day. That’s the whole method.",
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
