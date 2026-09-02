import type { Lang } from "@/lib/i18n"

const sv = {
  eyebrow: "Därför DYGN",
  heading: "Gjord för att tas varje dag. Byggd för att göra skillnad.",
  items: [
    {
      number: "01",
      title: "Energi i vardagen",
      text: "Två av tre svenskar känner sig ofta trötta. Magnesium, B12 och folat bidrar till att minska trötthet och utmattning, dag efter dag.",
    },
    {
      number: "02",
      title: "Elektrolyter du kan känna",
      text: "Kalium och magnesium bidrar till normal muskelfunktion och vätskebalans. Tränar och svettas du mycket är det här delen av DYGN som faktiskt märks, ofta redan samma dag.",
    },
    {
      number: "03",
      title: "Immunförsvar året om",
      text: "D-vitamin och zink bidrar till immunsystemets normala funktion. Som mest värdefullt från oktober till mars, när solen inte räcker till.",
    },
    {
      number: "04",
      title: "Starkare på sikt",
      text: "D3, K2 och magnesium bidrar till att bibehålla normal benstomme. Det tysta arbetet du inte känner, men som gör störst skillnad över åren.",
    },
  ],
}

const en: typeof sv = {
  eyebrow: "Why DYGN",
  heading: "Made to be taken every day. Built to make a difference.",
  items: [
    {
      number: "01",
      title: "Everyday energy",
      text: "Two in three Swedes often feel tired. Magnesium, B12 and folate contribute to the reduction of tiredness and fatigue, day after day.",
    },
    {
      number: "02",
      title: "Electrolytes you can feel",
      text: "Potassium and magnesium contribute to normal muscle function and fluid balance. If you train and sweat a lot, this is the part of DYGN you actually notice, often the same day.",
    },
    {
      number: "03",
      title: "Immune system all year round",
      text: "Vitamin D and zinc contribute to the normal function of the immune system. Most valuable from October to March, when sunlight falls short.",
    },
    {
      number: "04",
      title: "Stronger over time",
      text: "D3, K2 and magnesium contribute to the maintenance of normal bones. The quiet work you don’t feel, but which makes the biggest difference over the years.",
    },
  ],
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
