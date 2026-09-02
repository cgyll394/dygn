import type { Lang } from "@/lib/i18n"

const sv = {
  heading: "Varför DYGN och inte allt annat?",
  intro:
    "De flesta tillskott konkurrerar med längre innehållsförteckningar. Vi konkurrerar med kortare, där varje rad har belägg och en dos som betyder något.",
  // sr-only-rubrik för egenskapskolumnen
  feature: "Egenskap",
  // sr-only-text för bock/streck i tabellen
  yes: "Ja",
  no: "Nej",
  columns: {
    mobile: { dygn: "DYGN", blends: "Gröna pulver", pharmacy: "Apotek" },
    desktop: { dygn: "DYGN", blends: "Gröna pulver (AG1, IM8)", pharmacy: "Apotekens multivitamin" },
  },
  // Radtexter, zippas med bockarna i comparison.tsx (samma ordning)
  rows: [
    "Alla doser deklarerade på etiketten",
    "Dokumenterade former (5-MTHF, MK-7, bisglycinat)",
    "Doser i nivåer som studier faktiskt använt",
    "Utan proprietära blandningar",
    "Formulerad för nordiska bristmönster",
    "En dos om dagen, inget schema",
    "8 ingredienser, inget onödigt",
  ],
  footnote:
    "Jämförelsen avser typiska produkter i respektive kategori på den svenska marknaden, baserat på publicerade innehållsförteckningar.",
}

const en: typeof sv = {
  heading: "Why DYGN and not everything else?",
  intro:
    "Most supplements compete with longer ingredient lists. We compete with a shorter one, where every line has evidence behind it and a dose that means something.",
  feature: "Feature",
  yes: "Yes",
  no: "No",
  columns: {
    mobile: { dygn: "DYGN", blends: "Green powders", pharmacy: "Pharmacy" },
    desktop: { dygn: "DYGN", blends: "Green powders (AG1, IM8)", pharmacy: "Pharmacy multivitamins" },
  },
  rows: [
    "All doses declared on the label",
    "Documented forms (5-MTHF, MK-7, bisglycinate)",
    "Doses at levels studies have actually used",
    "No proprietary blends",
    "Formulated for Nordic deficiency patterns",
    "One dose a day, no schedule",
    "8 ingredients, nothing unnecessary",
  ],
  footnote:
    "The comparison refers to typical products in each category on the Swedish market, based on published ingredient lists.",
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
