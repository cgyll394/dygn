import type { Lang } from "@/lib/i18n"

const sv = {
  title: "Varukorg",
  closeCart: "Stäng varukorg",
  close: "Stäng",
  empty: "Din varukorg är tom.",
  continueShopping: "Fortsätt handla",
  decrease: "Minska antal",
  increase: "Öka antal",
  subtotal: "Delsumma",
  checkoutNote: "Frakt och eventuella rabatter beräknas i kassan.",
  checkout: "Till kassan",
  /** Egna etiketter i stället för Shopifys (alltid svenska) varianttitlar, nycklade på VariantKind. */
  variant: {
    subscription: "Prenumeration",
    threePack: "3-pack",
    oneTime: "Engångsköp",
  },
}

const en: typeof sv = {
  title: "Cart",
  closeCart: "Close cart",
  close: "Close",
  empty: "Your cart is empty.",
  continueShopping: "Continue shopping",
  decrease: "Decrease quantity",
  increase: "Increase quantity",
  subtotal: "Subtotal",
  checkoutNote: "Shipping and any discounts are calculated at checkout.",
  checkout: "Checkout",
  variant: {
    subscription: "Subscription",
    threePack: "3-pack",
    oneTime: "One-time purchase",
  },
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
