import type { Lang } from "@/lib/i18n"

const sv = {
  legend: "Välj ditt sätt att köpa",
  save: (pct: number) => `Spara ${pct}%`,
  perDay: "per dag",
  options: {
    subscription: {
      label: "Prenumeration",
      pickBadge: "De flesta väljer denna",
      note: "30 sachets var 30:e dag",
      perks: ["Alltid fri frakt", "Pausa, hoppa över eller avsluta när som helst"],
    },
    threePack: {
      label: "3-pack",
      note: "90 sachets, en leverans",
      perks: ["Fri frakt ingår"],
    },
    oneTime: {
      label: "Engångsköp",
      note: "30 sachets · frakt 50 kr tillkommer",
      perks: [] as string[],
    },
  },
  addToCart: (price: string) => `Lägg i varukorgen · ${price}`,
  soldOut: "Slutsåld",
  assurances: {
    delivery: "Levereras inom 2–4 vardagar",
    returns: "30 dagars öppet köp, även på öppnade förpackningar",
    tested: "Tredjepartstestad. Tillverkad i Sverige",
    payment: "Säker betalning. Dela upp med Klarna",
  },
}

const en: typeof sv = {
  legend: "Choose how to buy",
  save: (pct: number) => `Save ${pct}%`,
  perDay: "per day",
  options: {
    subscription: {
      label: "Subscription",
      pickBadge: "Most popular",
      note: "30 sachets every 30 days",
      perks: ["Always free shipping", "Pause, skip or cancel at any time"],
    },
    threePack: {
      label: "3-pack",
      note: "90 sachets, one delivery",
      perks: ["Free shipping included"],
    },
    oneTime: {
      label: "One-time purchase",
      note: "30 sachets · plus SEK 50 shipping",
      perks: [],
    },
  },
  addToCart: (price: string) => `Add to cart · ${price}`,
  soldOut: "Sold out",
  assurances: {
    delivery: "Delivered in 2–4 working days",
    returns: "30-day money-back guarantee, even on opened packs",
    tested: "Third-party tested. Made in Sweden",
    payment: "Secure payment. Pay in instalments with Klarna",
  },
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
