import type { Lang } from "@/lib/i18n"

const sv = {
  marquee: {
    // Ikonerna ligger i social-proof.tsx (BADGE_ICONS), samma ordning
    badges: ["Tillverkad i Sverige", "Tredjepartstestad", "Vegansk & sockerfri", "Rätt form & rätt dos"],
  },
  reviews: {
    heading: "Från de som redan börjat",
    average: "5,0 i snitt bland tidiga testare",
    starsLabel: "5 av 5 stjärnor",
    items: [
      {
        name: "Magnus, 41",
        title: "Det första jag faktiskt minns att ta",
        text: "Jag har provat AG1, multivitaminer från apoteket, allt möjligt. Slutat med varje. DYGN är det första jag tar varje morgon utan att tänka. Tror det är att det är en sak att göra, inte sju.",
      },
      {
        name: "Elin, 34",
        title: "Någon har läst studierna",
        text: "Jag läste innehållsförteckningen på det jag tog innan och insåg att hälften var doser som inte gör någon skillnad. DYGN var första gången jag kände att någon faktiskt läst forskningen innan de formulerade.",
      },
      {
        name: "Anna, 29",
        title: "En sak. Klart.",
        text: "Mindre att tänka på på morgonen. Det är hela poängen för mig. En sachet, ett glas vatten, klart.",
      },
    ],
    disclaimer: "Från testpanelen: 200 personer, 90 dagar, ingen betalning. Upplevelser varierar.",
  },
  doctor: {
    byline: "Dr. Albert Öberg, specialist i allmänmedicin",
    quote:
      '"De flesta patienter jag möter behöver inte fler kosttillskott. De behöver färre, i rätt dos, på rätt form. DYGN är det första svenska alternativ jag sett som formulerats utifrån den principen."',
  },
}

const en: typeof sv = {
  marquee: {
    badges: ["Made in Sweden", "Third-party tested", "Vegan & sugar-free", "Right form & right dose"],
  },
  reviews: {
    heading: "From those who have already started",
    average: "5.0 average among early testers",
    starsLabel: "5 out of 5 stars",
    items: [
      {
        name: "Magnus, 41",
        title: "The first one I actually remember to take",
        text: "I’ve tried AG1, pharmacy multivitamins, all sorts. Stopped every one of them. DYGN is the first thing I take every morning without thinking. I think it’s because it’s one thing to do, not seven.",
      },
      {
        name: "Elin, 34",
        title: "Someone has read the studies",
        text: "I read the ingredient list on what I took before and realised half of it was doses that make no difference. DYGN was the first time I felt someone had actually read the research before formulating.",
      },
      {
        name: "Anna, 29",
        title: "One thing. Done.",
        text: "Less to think about in the morning. That’s the whole point for me. One sachet, a glass of water, done.",
      },
    ],
    disclaimer: "From the test panel: 200 people, 90 days, no payment. Experiences vary.",
  },
  doctor: {
    byline: "Dr. Albert Öberg, specialist in general practice",
    quote:
      '"Most patients I meet do not need more supplements. They need fewer, in the right dose, in the right form. DYGN is the first Swedish option I have seen that was formulated on that principle."',
  },
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
