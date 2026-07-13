import type { Metadata } from "next"
import Link from "next/link"
import { Star } from "lucide-react"
import { getProduct } from "@/lib/shopify"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { ProductGallery } from "@/components/product/product-gallery"
import { BuyBox } from "@/components/product/buy-box"
import { StickyAtc } from "@/components/product/sticky-atc"
import { EffectTimeline } from "@/components/sections/pdp/effect-timeline"
import { WhySachet } from "@/components/sections/pdp/why-sachet"
import { ProductFacts } from "@/components/sections/pdp/product-facts"
import { Ingredients } from "@/components/sections/ingredients"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Reviews, DoctorQuote } from "@/components/sections/social-proof"
import { Faq } from "@/components/sections/faq"

export const metadata: Metadata = {
  title: "DYGN Daily Nutrition — 30 sachets | DYGN",
  description:
    "Åtta näringsämnen i bioaktiva former, doserade efter forskning. En sachet om dagen. Vegansk, tredjepartstestad, tillverkad i EU.",
}

const badges = ["Framtagen för nordiska behov", "Tredjepartstestad", "Vegansk & utan tillsatt socker"]

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
      <div className="bg-primary px-4 py-2.5 text-center">
        <Link href="#kop-panel" className="font-serif text-sm text-primary-foreground">
          {"Lansering hösten 2026. Förbeställ nu — 30 dagars öppet köp."}
        </Link>
      </div>
      <SiteHeader />
      <main>
        {/* PDP hero */}
        <section className="bg-card" aria-labelledby="pdp-heading">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 md:grid-cols-2 md:gap-16 md:px-8 md:py-16">
            <div className="md:sticky md:top-24 md:self-start">
              <ProductGallery images={product.images.nodes} title={product.title} />
            </div>
            <div id="kop-panel" className="flex scroll-mt-24 flex-col">
              <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
                {badges.map((badge) => (
                  <li
                    key={badge}
                    className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground"
                  >
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-primary" />
                    {badge}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center gap-2">
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

              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                Åtta näringsämnen i bioaktiva former, doserade efter forskning — inte marknadsföring. Löses i vatten.
                Mild citrus. Utan tillsatt socker.
              </p>

              <div className="mt-8">
                <BuyBox variants={product.variants.nodes} />
              </div>
            </div>
          </div>
        </section>

        <WhySachet />
        <Ingredients />
        <EffectTimeline />
        <ProductFacts />
        <HowItWorks />
        <Reviews />
        <DoctorQuote />
        <Faq />
      </main>
      <SiteFooter />
      <CartDrawer />
      <StickyAtc
        variants={product.variants.nodes}
        watchId="kop-panel"
        image={product.images.nodes[0]?.url ?? "/product/dygn-box.png"}
      />
    </>
  )
}
