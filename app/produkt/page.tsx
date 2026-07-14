import type { Metadata } from "next"
import { getProduct, type ProductImage } from "@/lib/shopify"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { ProductGallery } from "@/components/product/product-gallery"
import { BuyBox } from "@/components/product/buy-box"
import { StickyAtc } from "@/components/product/sticky-atc"
import { EffectTimeline } from "@/components/sections/pdp/effect-timeline"
import { ProductFacts } from "@/components/sections/pdp/product-facts"
import { Ingredients } from "@/components/sections/ingredients"
import { Faq } from "@/components/sections/faq"

export const metadata: Metadata = {
  title: "DYGN Daily Nutrition — 30 sachets | DYGN",
  description:
    "Åtta näringsämnen i bioaktiva former, doserade efter forskning. En sachet om dagen. Vegansk, tredjepartstestad, tillverkad i EU.",
}

const meta = ["Framtagen för nordiska behov", "Tredjepartstestad", "Vegansk, utan tillsatt socker"]

const HAND_SHOT: ProductImage = {
  url: "/product/dygn-hand.jpg",
  altText: "DYGN-sachet i en hand mot varmt ljus",
  width: 1800,
  height: 2234,
}

export default async function ProductPage() {
  const product = await getProduct("dygn-daily-nutrition")

  if (!product) {
    return (
      <>
        <SiteHeader />
        <main className="flex min-h-[60vh] items-center justify-center">
          <p className="text-muted-foreground">Produkten kunde inte hämtas just nu. Försök igen strax.</p>
        </main>
        <SiteFooter />
      </>
    )
  }

  return (
    <>
      <SiteHeader />
      <main>
        {/* PDP hero */}
        <section className="border-b border-border" aria-labelledby="pdp-heading">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:grid-cols-2 md:gap-20 md:px-8 md:py-20">
            <div className="md:sticky md:top-24 md:self-start">
              <ProductGallery images={[HAND_SHOT, ...product.images.nodes]} title={product.title} />
            </div>
            <div id="kop-panel" className="flex scroll-mt-24 flex-col">
              <p className="type-eyebrow">Daily Nutrition · 30 sachets</p>
              <h1 id="pdp-heading" className="type-title mt-5">
                Daily Nutrition
              </h1>
              <p className="type-lede mt-5 max-w-md">
                Åtta näringsämnen i bioaktiva former, doserade efter forskning — inte marknadsföring. Löses i vatten.
                Mild citrus. Utan tillsatt socker.
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-1.5">
                {meta.map((item) => (
                  <li key={item} className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <BuyBox variants={product.variants.nodes} />
              </div>
            </div>
          </div>
        </section>

        <EffectTimeline />
        <ProductFacts />
        <Ingredients />
        <Faq />
      </main>
      <SiteFooter />
      <CartDrawer />
      <StickyAtc variants={product.variants.nodes} watchId="kop-panel" />
    </>
  )
}
