import type { Lang } from "@/lib/i18n"

const sv = {
  metaTitle: "DYGN Daily Nutrition · 30 sachets | DYGN",
  metaDescription:
    "Åtta näringsämnen i rätt form och rätt dos. Förklarat och tredjepartstestat. En sachet om dagen. Vegansk, tillverkad i Sverige.",
  jsonLdDescription:
    "Åtta näringsämnen i rätt form och rätt dos. En sachet om dagen, löses i vatten. Vegansk, tillverkad i Sverige.",
  galleryAlts: [
    "DYGN-sachet svävande mot koboltblå bakgrund",
    "DYGN-sachet i en hand mot varmt ljus",
    "DYGN Daily Essential-sachet, studiofoto",
    "Öppnad DYGN-ask med 30 sachets",
  ],
  error: "Produkten kunde inte hämtas just nu. Försök igen strax.",
  testers: "Från våra första 200 testare",
  title: "Daily Nutrition",
  subtitle: "30 sachets. En om dagen.",
  chipsLabel: "Bidrar till",
  chips: ["Immunförsvar", "Energi & trötthet", "Ben & muskler", "Elektrolytbalans"],
  description:
    "Åtta näringsämnen i en sachet, bland annat 2000 IE D3, 100 µg K2 och 200 mg magnesium. Löses i vatten. Mild citrus, utan tillsatt socker.",
}

const en: typeof sv = {
  metaTitle: "DYGN Daily Nutrition · 30 sachets | DYGN",
  metaDescription:
    "Eight nutrients in the right form and the right dose. Explained and third-party tested. One sachet a day. Vegan, made in Sweden.",
  jsonLdDescription:
    "Eight nutrients in the right form and the right dose. One sachet a day, dissolved in water. Vegan, made in Sweden.",
  galleryAlts: [
    "DYGN sachet floating against a cobalt-blue background",
    "DYGN sachet in a hand against warm light",
    "DYGN Daily Essential sachet, studio photo",
    "Opened DYGN box with 30 sachets",
  ],
  error: "The product could not be loaded right now. Please try again shortly.",
  testers: "From our first 200 testers",
  title: "Daily Nutrition",
  subtitle: "30 sachets. One a day.",
  chipsLabel: "Contributes to",
  chips: ["Immune system", "Energy & fatigue", "Bones & muscles", "Electrolyte balance"],
  description:
    "Eight nutrients in one sachet, including 2000 IU D3, 100 µg K2 and 200 mg magnesium. Dissolves in water. Mild citrus, no added sugar.",
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
