import type { Lang } from "@/lib/i18n"

const sv = {
  eyebrow: "Daily Nutrition · 30 sachets",
  heading: "Bara det viktiga. Inget onödigt.",
  paragraph: "Åtta näringsämnen i en sachet. Löses i vatten. Mild citrus, utan tillsatt socker.",
  ingredientsLabel: "Innehåller",
  ingredients: ["D3", "K2", "B12", "Folat", "Magnesium", "Kalium", "Zink", "Jod"],
  error: "Produkten kunde inte hämtas just nu. Försök igen strax.",
  /** Paras med ASSURANCE_ICONS i buy-section.tsx, samma ordning. */
  assurances: [
    "Levereras inom 2–4 vardagar",
    "30 dagars öppet köp",
    "Tredjepartstestad, tillverkad i Sverige",
    "Säker betalning. Dela upp med Klarna",
  ],
  /** Alt-texter till GALLERY i buy-section.tsx, samma ordning. */
  galleryAlt: [
    "DYGN Daily Essential-sachet stående i varmt ljus",
    "DYGN-sachet svävande mot koboltblå bakgrund",
    "DYGN-sachet i en hand mot varmt ljus",
    "DYGN Daily Essentials-ask med en sachet",
    "DYGN på löparbanan, fisheye",
  ],
}

const en: typeof sv = {
  eyebrow: "Daily Nutrition · 30 sachets",
  heading: "Only what matters. Nothing unnecessary.",
  paragraph: "Eight nutrients in one sachet. Dissolves in water. Mild citrus, no added sugar.",
  ingredientsLabel: "Contains",
  ingredients: ["D3", "K2", "B12", "Folate", "Magnesium", "Potassium", "Zinc", "Iodine"],
  error: "The product couldn’t be loaded right now. Please try again shortly.",
  assurances: [
    "Delivered in 2–4 working days",
    "30-day money-back guarantee",
    "Third-party tested, made in Sweden",
    "Secure payment. Pay in instalments with Klarna",
  ],
  galleryAlt: [
    "DYGN Daily Essential sachet standing in warm light",
    "DYGN sachet floating against a cobalt blue background",
    "DYGN sachet held in a hand in warm light",
    "DYGN Daily Essentials box with one sachet",
    "DYGN on the running track, fisheye",
  ],
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
