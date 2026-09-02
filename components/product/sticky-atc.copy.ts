import type { Lang } from "@/lib/i18n"

const sv = {
  mobileTitle: "DYGN Daily Nutrition · 30 sachets",
  title: "DYGN Daily Nutrition",
  subtitle: "30 sachets. En om dagen.",
  subscribe: (save: number, price: string) => `Prenumerera${save > 0 ? ` · spara ${save} %` : ""} · ${price}`,
  addToCart: (price: string) => `Lägg i varukorgen · ${price}`,
  oneTime: (price: string) => `Engångsköp · ${price}`,
}

const en: typeof sv = {
  mobileTitle: "DYGN Daily Nutrition · 30 sachets",
  title: "DYGN Daily Nutrition",
  subtitle: "30 sachets. One a day.",
  subscribe: (save: number, price: string) => `Subscribe${save > 0 ? ` · save ${save} %` : ""} · ${price}`,
  addToCart: (price: string) => `Add to cart · ${price}`,
  oneTime: (price: string) => `One-time purchase · ${price}`,
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
