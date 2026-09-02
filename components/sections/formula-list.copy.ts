import type { Lang } from "@/lib/i18n"

const sv = {
  eyebrow: "Formuleringen",
  heading: "Åtta näringsämnen. Inga genvägar.",
  text: "Valda för vanliga brister i Norden. Doserade efter forskning. Allt deklarerat.",
  link: "Hela formuleringen, förklarad",
  rows: [
    { name: "Vitamin D3", form: "Vegansk kolekalciferol", dose: "2000 IE" },
    { name: "Vitamin K2", form: "MK-7", dose: "180 µg" },
    { name: "Vitamin B12", form: "Cyanokobalamin", dose: "100 µg" },
    { name: "Folat", form: "L-metylfolat", dose: "400 µg" },
    { name: "Magnesium", form: "Bisglycinat", dose: "200 mg" },
    { name: "Kalium", form: "Citrat", dose: "400 mg" },
    { name: "Zink", form: "Glukonat", dose: "10 mg" },
    { name: "Jod", form: "Natriumjodid", dose: "150 µg" },
  ],
}

const en: typeof sv = {
  eyebrow: "The formula",
  heading: "Eight nutrients. No shortcuts.",
  text: "Selected for common deficiencies in the Nordics. Dosed according to research. Everything declared.",
  link: "The full formula, explained",
  rows: [
    { name: "Vitamin D3", form: "Vegan cholecalciferol", dose: "2000 IU" },
    { name: "Vitamin K2", form: "MK-7", dose: "180 µg" },
    { name: "Vitamin B12", form: "Cyanocobalamin", dose: "100 µg" },
    { name: "Folate", form: "L-methylfolate", dose: "400 µg" },
    { name: "Magnesium", form: "Bisglycinate", dose: "200 mg" },
    { name: "Potassium", form: "Citrate", dose: "400 mg" },
    { name: "Zinc", form: "Gluconate", dose: "10 mg" },
    { name: "Iodine", form: "Sodium iodide", dose: "150 µg" },
  ],
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
