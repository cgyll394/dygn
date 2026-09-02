import type { Lang } from "@/lib/i18n"

// Ikonerna ligger kvar i komponenten (BENEFIT_ICONS) och paras ihop med
// benefits per index — håll samma ordning här och där.
const sv = {
  heading: "Gjord för att göra skillnad.",
  benefits: [
    { title: "Energi varje dag", text: "Magnesium, B12 och folat mot trötthet" },
    { title: "Immunförsvar", text: "D-vitamin och zink, året om" },
    { title: "Ben & muskler", text: "K2, D3 och magnesium" },
    { title: "Elektrolytbalans", text: "Kalium och magnesium, känns direkt" },
  ],
}

const en: typeof sv = {
  heading: "Made to make a difference.",
  benefits: [
    { title: "Energy every day", text: "Magnesium, B12 and folate against fatigue" },
    { title: "Immune system", text: "Vitamin D and zinc, all year round" },
    { title: "Bones & muscles", text: "K2, D3 and magnesium" },
    { title: "Electrolyte balance", text: "Potassium and magnesium, felt right away" },
  ],
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
