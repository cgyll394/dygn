import { Truck, RotateCcw, ShieldCheck, Lock } from "lucide-react"
import type { Lang } from "@/lib/i18n"
import { getProduct, type ProductImage } from "@/lib/shopify"
import { ProductGallery } from "@/components/product/product-gallery"
import { BuyBox } from "@/components/product/buy-box"
import { BuyBoxAccordion } from "@/components/v2/buy-box-accordion"
import { PaymentBadges } from "@/components/payment-badges"
import { COPY } from "./buy-section.copy"

// Texterna ligger i buy-section.copy.ts (assurances), parade per index.
const ASSURANCE_ICONS = [Truck, RotateCcw, ShieldCheck, Lock]

// Alt-texterna ligger i buy-section.copy.ts (galleryAlt), parade per index.
const GALLERY: Omit<ProductImage, "altText">[] = [
  { url: "/product/dygn-sachet-auto.jpg", width: 1600, height: 1986 },
  { url: "/product/dygn-float.jpg", width: 1600, height: 1986 },
  { url: "/product/dygn-hand-hold.jpg", width: 1600, height: 2008 },
  { url: "/product/dygn-box-sachet.jpg", width: 1600, height: 2008 },
  { url: "/product/dygn-fisheye.jpg", width: 1600, height: 2008 },
]

export async function BuySection({
  lang,
  compact = false,
  accordion = false,
}: {
  lang: Lang
  compact?: boolean
  accordion?: boolean
}) {
  const t = COPY[lang]
  const product = await getProduct("dygn-daily-nutrition", lang)

  if (!product) {
    return (
      <section id="kop" className="bg-card py-24 text-center">
        <p className="text-muted-foreground">{t.error}</p>
      </section>
    )
  }

  const images: ProductImage[] = GALLERY.map((image, index) => ({ ...image, altText: t.galleryAlt[index] }))

  return (
    <section id="kop" className="scroll-mt-20 bg-card py-16 md:py-24" aria-labelledby="buy-heading">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <ProductGallery images={images} title={product.title} />
          <div className="flex flex-col md:pt-2">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">{t.eyebrow}</p>
            <h2 id="buy-heading" className="mt-3 font-serif text-4xl text-foreground text-balance md:text-5xl">
              {t.heading}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{t.paragraph}</p>
            {accordion && (
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={t.ingredientsLabel}>
                {t.ingredients.map((ing) => (
                  <li
                    key={ing}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {ing}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-8">
              {accordion ? (
                <BuyBoxAccordion variants={product.variants.nodes} compact={compact} />
              ) : (
                <BuyBox variants={product.variants.nodes} compact={compact} />
              )}
            </div>
          </div>
        </div>

        {/* Compact: trygghets-rad + betalmärken centrerat under hela avsnittet */}
        {compact && (
          <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center gap-7 border-t border-border pt-10 md:mt-16">
            <ul className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-7 sm:gap-y-3">
              {ASSURANCE_ICONS.map((Icon, index) => {
                const text = t.assurances[index]
                return (
                  <li key={text} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon className="h-4 w-4 shrink-0 text-foreground" aria-hidden="true" />
                    {text}
                  </li>
                )
              })}
            </ul>
            <PaymentBadges lang={lang} className="justify-center" />
          </div>
        )}
      </div>
    </section>
  )
}
