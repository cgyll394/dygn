import type { Lang } from "@/lib/i18n"

const sv = {
  title: "DYGN Daily Nutrition",
  pack: "30 sachets",
  addToCart: "Lägg i varukorgen",
  addShort: "Lägg i korg",
  chooseLabel: "Välj alternativ",
}

const en: typeof sv = {
  title: "DYGN Daily Nutrition",
  pack: "30 sachets",
  addToCart: "Add to cart",
  addShort: "Add to cart",
  chooseLabel: "Choose option",
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
