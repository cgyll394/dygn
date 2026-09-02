import type { Lang } from "@/lib/i18n"

const sv = {
  banner: [
    "Lansering hösten 2026. Förbeställ nu.",
    "30 dagars öppet köp. Fri frakt med prenumeration.",
    "En sachet. Åtta näringsämnen.",
    "Tillverkad och testad i Sverige.",
  ],
  menu: "Huvudmeny",
  product: "Produkten",
  formula: "Formuleringen",
  faq: "Frågor",
  home: "DYGN startsida",
  buy: "Köp DYGN",
  cart: (quantity: number) => `Öppna varukorg, ${quantity} varor`,
}

const en: typeof sv = {
  banner: [
    "Launching autumn 2026. Pre-order now.",
    "30-day money-back guarantee. Free shipping with subscription.",
    "One sachet. Eight nutrients.",
    "Made and tested in Sweden.",
  ],
  menu: "Main menu",
  product: "The product",
  formula: "The formula",
  faq: "FAQ",
  home: "DYGN home",
  buy: "Shop DYGN",
  cart: (quantity: number) => `Open cart, ${quantity} items`,
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
