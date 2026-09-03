import type { Lang } from "@/lib/i18n"

const sv = {
  eyebrow: "Våra fyra principer",
  heading: "DYGN-standarden.",
  pillars: [
    {
      title: "Rätt form",
      text: "Varje näringsämne i en form med dokumenterat upptag som håller i pulver.",
    },
    {
      title: "Rätt dos",
      text: "Doser med stöd i forskningen där det behövs, dagsbehov där det räcker. Alltid deklarerat.",
    },
    {
      title: "Tillverkad i Sverige",
      text: "Hos en HACCP-certifierad svensk tillverkare som följer GMP. Färdig produkt kontrolleras mot gränsvärden för mikrobiologi och tungmetaller, och varje produktion testas dessutom av oberoende labb.",
    },
    {
      title: "Ärlig",
      text: "Vi lovar inget som inte går att hålla. Det som inte känns går att mäta.",
    },
  ],
}

const en: typeof sv = {
  eyebrow: "Our four principles",
  heading: "The DYGN standard.",
  pillars: [
    {
      title: "The right form",
      text: "Every nutrient in a form with documented absorption that holds up in powder.",
    },
    {
      title: "The right dose",
      text: "Doses backed by research where needed, the daily requirement where that is enough. Always declared.",
    },
    {
      title: "Made in Sweden",
      text: "At an HACCP-certified Swedish manufacturer that follows GMP. The finished product is checked against limit values for microbiology and heavy metals, and every production run is also tested by an independent lab.",
    },
    {
      title: "Honest",
      text: "We promise nothing that cannot be kept. What cannot be felt can be measured.",
    },
  ],
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
