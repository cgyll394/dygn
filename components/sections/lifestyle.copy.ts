import type { Lang } from "@/lib/i18n"

const sv = {
  philosophy: {
    imageAlt: "Cyklist sedd ovanifrån i kvällsljus",
    quote: "Vi adderar bara det vi har belägg för. Vi utelämnar resten.",
  },
  grid: {
    ariaLabel: "DYGN i vardagen",
    mountainAlt: "Person i grå jacka som blickar ut över berg",
    runnersAlt: "Löpare på bana i skymning",
    windowAlt: "Person som öppnar ett fönster på morgonen",
    quote: "Inget revolutionerande. Bara det viktiga, varje dag.",
    cta: "Läs mer",
  },
}

const en: typeof sv = {
  philosophy: {
    imageAlt: "Cyclist seen from above in evening light",
    quote: "We only add what we have evidence for. We leave out the rest.",
  },
  grid: {
    ariaLabel: "DYGN in everyday life",
    mountainAlt: "Person in a grey jacket looking out over mountains",
    runnersAlt: "Runners on a track at dusk",
    windowAlt: "Person opening a window in the morning",
    quote: "Nothing revolutionary. Only what matters, every day.",
    cta: "Read more",
  },
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
