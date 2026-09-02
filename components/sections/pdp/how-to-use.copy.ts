import type { Lang } from "@/lib/i18n"

const sv = {
  eyebrow: "Så tar du DYGN",
  heading: "Tio sekunder om dagen.",
  imageAlt: "Löpare visar upp en DYGN-sachet framför sin löpargrupp",
  steps: [
    { number: "01", title: "Riv", text: "En sachet, 5 gram. I fickan, väskan eller necessären." },
    { number: "02", title: "Rör", text: "Löses i ett glas kallt vatten på under 30 sekunder. Mild citrus." },
    { number: "03", title: "Drick", text: "Klart för dygnet. Sedan behöver du inte tänka på det mer." },
  ],
}

const en: typeof sv = {
  eyebrow: "How to take DYGN",
  heading: "Ten seconds a day.",
  imageAlt: "Runner holding up a DYGN sachet in front of their running group",
  steps: [
    { number: "01", title: "Tear", text: "One sachet, 5 grams. In your pocket, bag or toiletry kit." },
    { number: "02", title: "Stir", text: "Dissolves in a glass of cold water in under 30 seconds. Mild citrus." },
    { number: "03", title: "Drink", text: "Set for the day. Then you don’t have to think about it again." },
  ],
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
