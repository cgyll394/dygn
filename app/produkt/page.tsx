import type { Metadata } from "next"
import { Star } from "lucide-react"
import { getProduct, type ProductImage } from "@/lib/shopify"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { ProductGallery } from "@/components/product/product-gallery"
import { BuyBox } from "@/components/product/buy-box"
import { StickyAtc } from "@/components/product/sticky-atc"
import { HowToUse } from "@/components/sections/pdp/how-to-use"
import { EffectTimeline } from "@/components/sections/pdp/effect-timeline"
import { ProductFacts } from "@/components/sections/pdp/product-facts"
import { Ingredients } from "@/components/sections/ingredients"
import { Honesty } from "@/components/sections/honesty"
import { Faq } from "@/components/sections/faq"

export const metadata: Metadata = {
  title: "DYGN Daily Nutrition — 30 sachets | DYGN",
  description:
    "Åtta näringsämnen i rätt form och rätt dos — förklarat och tredjepartstestat. En sachet om dagen. Vegansk, tillverkad i EU.",
}

const chips = ["Immunförsvar", "Energi & trötthet", "Ben & muskler", "Elektrolytbalans"]

const GALLERY: ProductImage[] = [
  { url: "/product/dygn-float.jpg", altText: "DYGN-sachet svävande mot koboltblå bakgrund", width: 1600, height: 1986 },
  { url: "/product/dygn-packshot.jpg", altText: "DYGN Daily Essential-sachet, studiofoto", width: 1600, height: 2399 },
  { url: "/product/dygn-box-open.jpg", altText: "Öppnad DYGN-ask med 30 sachets", width: 1800, height: 1344 },
]

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
      <main className="pb-28 md:pb-24">
        {/* PDP hero */}
        <section className="bg-card" aria-labelledby="pdp-heading">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-8 md:grid-cols-2 md:gap-16 md:px-8 md:py-16">
            <div className="md:sticky md:top-28 md:self-start">
              <ProductGallery images={GALLERY} title={product.title} />
            </div>
            <div id="kop-panel" className="flex scroll-mt-24 flex-col">
              <div className="flex items-center gap-2">
                <span className="flex" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </span>
                <p className="text-xs text-muted-foreground">{"4,9 av 5 — 214 omdömen från testpanelen"}</p>
              </div>

              <h1 id="pdp-heading" className="mt-3 font-serif text-4xl leading-tight text-balance md:text-5xl">
                Daily Nutrition
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">{"30 sachets. En om dagen."}</p>

              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Bidrar till">
                {chips.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    {chip}
                  </li>
                ))}
              </ul>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                {"2000 IE vitamin D3, 180 µg K2 (MK-7), 200 mg magnesium, 500 µg B12, 400 µg folat, 400 mg kalium, 15 mg zink och 150 µg jod. Varje form vald för dokumenterat upptag, varje dos förklarad. Löses i vatten. Mild citrus, utan tillsatt socker."}
              </p>

              <div className="mt-8">
                <BuyBox variants={product.variants.nodes} />
              </div>
            </div>
          </div>
        </section>

        <HowToUse />
        <EffectTimeline />
        <ProductFacts />
        <Ingredients />
        <Honesty />
        <Faq />
      </main>
      <SiteFooter />
      <CartDrawer />
      <StickyAtc variants={product.variants.nodes} />
    </>
  )
}
