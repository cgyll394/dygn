import type { ProductVariant } from "@/lib/shopify"

export type VariantKind = "subscription" | "threePack" | "oneTime"

/**
 * Varianttitlarna i Shopify är svenska ("Prenumeration", "3-pack",
 * "Engångsköp") oavsett @inContext-språk. Klassa på titeln så att UI:t
 * kan sätta egna, översatta etiketter.
 */
export function variantKind(title: string): VariantKind {
  const t = title.toLowerCase()
  if (t.includes("prenumeration") || t.includes("subscription")) return "subscription"
  if (t.includes("3-pack") || t.includes("3 pack")) return "threePack"
  return "oneTime"
}

export function findVariant(variants: ProductVariant[], kind: VariantKind): ProductVariant | undefined {
  return variants.find((v) => variantKind(v.title) === kind)
}

/** Procent rabatt mot jämförpriset, 0 om det saknas. */
export function savingsPercent(variant?: ProductVariant): number {
  if (!variant?.compareAtPrice) return 0
  return Math.round(
    (1 - Number.parseFloat(variant.price.amount) / Number.parseFloat(variant.compareAtPrice.amount)) * 100,
  )
}
