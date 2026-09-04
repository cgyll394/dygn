import type { Lang } from "@/lib/i18n"

const sv = {
  heading: "Samma innehåll, köpt var för sig",
  intro: "Vill du hellre bygga ihop formuleringen själv går det. Så här ser det ut i praktiken.",
  separateHeading: "Åtta separata burkar",
  separate: [
    { name: "Vitamin D3, 2000 IE", price: "ca 99 kr" },
    { name: "Vitamin K2, MK-7", price: "ca 149 kr" },
    { name: "Vitamin B12", price: "ca 89 kr" },
    { name: "Folat, aktiv form", price: "ca 129 kr" },
    { name: "Magnesiumbisglycinat", price: "ca 129 kr" },
    { name: "Kaliumcitrat", price: "ca 89 kr" },
    { name: "Zinkpikolinat", price: "ca 79 kr" },
    { name: "Jod", price: "ca 69 kr" },
  ],
  perMonth: "Per månad",
  separateTotal: "ca 830 kr",
  separateNote: "Plus åtta burkar i skåpet och åtta saker att komma ihåg varje morgon.",
  dygnHeading: "En DYGN-sachet",
  dygnBadge: "5 g om dagen",
  dygnPoints: [
    "Samma åtta näringsämnen",
    "Samma former, samma doser",
    "Löst i ett glas vatten på 30 sekunder",
    "En sak att komma ihåg",
  ],
  dygnPerMonth: "Per månad med prenumeration",
  dygnPrice: "299 kr",
  dygnPerDay: "10 kr per dag",
  cta: "Förbeställ DYGN",
  footnote:
    "Ungefärliga priser för motsvarande former och doser hos svenska apotek och webbutiker, juli 2026. Räkna gärna själv.",
}

const en: typeof sv = {
  heading: "The same contents, bought separately",
  intro: "If you’d rather put the formula together yourself, you can. Here’s how it looks in practice.",
  separateHeading: "Eight separate bottles",
  separate: [
    { name: "Vitamin D3, 2000 IU", price: "approx. SEK 99" },
    { name: "Vitamin K2, MK-7", price: "approx. SEK 149" },
    { name: "Vitamin B12", price: "approx. SEK 89" },
    { name: "Folate, active form", price: "approx. SEK 129" },
    { name: "Magnesium bisglycinate", price: "approx. SEK 129" },
    { name: "Potassium citrate", price: "approx. SEK 89" },
    { name: "Zinc picolinate", price: "approx. SEK 79" },
    { name: "Iodine", price: "approx. SEK 69" },
  ],
  perMonth: "Per month",
  separateTotal: "approx. SEK 830",
  separateNote: "Plus eight bottles in the cupboard and eight things to remember every morning.",
  dygnHeading: "One DYGN sachet",
  dygnBadge: "5 g a day",
  dygnPoints: [
    "The same eight nutrients",
    "The same forms, the same doses",
    "Dissolved in a glass of water in 30 seconds",
    "One thing to remember",
  ],
  dygnPerMonth: "Per month with a subscription",
  dygnPrice: "SEK 299",
  dygnPerDay: "SEK 10 per day",
  cta: "Pre-order DYGN",
  footnote:
    "Approximate prices for equivalent forms and doses at Swedish pharmacies and online shops, July 2026. Feel free to do the maths yourself.",
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
