import type { Metadata } from "next"
import { Star } from "lucide-react"
import { getProduct, type ProductImage } from "@/lib/shopify"
import { SITE_URL } from "@/lib/site"
import { alternatesFor, localePath } from "@/lib/i18n"
import { getLang, type LangParams } from "@/lib/lang-params"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { ProductGallery } from "@/components/product/product-gallery"
import { BuyBox } from "@/components/product/buy-box"
import { StickyAtc } from "@/components/product/sticky-atc"
import { HowToUse } from "@/components/sections/pdp/how-to-use"
import { EffectTimeline } from "@/components/sections/pdp/effect-timeline"
import { ProductFacts } from "@/components/sections/pdp/product-facts"
import { Honesty } from "@/components/sections/honesty"
import { Faq } from "@/components/sections/faq"
import { COPY } from "./copy"

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await getLang(params)
  const t = COPY[lang]
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: alternatesFor(lang, "/produkt"),
  }
}

// Byt till https://schema.org/InStock när vi börjar skicka direkt vid beställning
const AVAILABILITY = "https://schema.org/PreOrder"

const GALLERY: Omit<ProductImage, "altText">[] = [
  { url: "/product/dygn-float.jpg", width: 1600, height: 1986 },
  { url: "/product/dygn-hand.jpg", width: 1800, height: 2234 },
  { url: "/product/dygn-packshot.jpg", width: 1600, height: 2399 },
  { url: "/product/dygn-box-open.jpg", width: 1800, height: 1344 },
]

export default async function ProductPage({ params }: LangParams) {
  const lang = await getLang(params)
  const t = COPY[lang]
  const product = await getProduct("dygn-daily-nutrition", lang)

  if (!product) {
    return (
      <>
        <SiteHeader />
        <main className="flex min-h-[60vh] items-center justify-center">
          <p className="text-muted-foreground">{t.error}</p>
        </main>
        <SiteFooter lang={lang} />
      </>
    )
  }

  const gallery: ProductImage[] = GALLERY.map((image, i) => ({ ...image, altText: t.galleryAlts[i] }))

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "DYGN Daily Nutrition",
    description: t.jsonLdDescription,
    image: gallery.map((image) => `${SITE_URL}${image.url}`),
    brand: { "@type": "Brand", name: "DYGN" },
    offers: product.variants.nodes.map((variant) => ({
      "@type": "Offer",
      name: variant.title,
      price: Number.parseFloat(variant.price.amount).toFixed(2),
      priceCurrency: variant.price.currencyCode,
      availability: variant.availableForSale ? AVAILABILITY : "https://schema.org/OutOfStock",
      url: `${SITE_URL}${localePath(lang, "/produkt")}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <SiteHeader />
      <main className="pb-28 md:pb-24">
        {/* PDP hero */}
        <section className="-mt-20 bg-card pt-20 md:-mt-24 md:pt-24" aria-labelledby="pdp-heading">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-8 md:grid-cols-2 md:gap-16 md:px-8 md:py-16">
            <div className="md:sticky md:top-28 md:self-start">
              <ProductGallery images={gallery} title={product.title} />
            </div>
            <div id="kop-panel" className="flex scroll-mt-24 flex-col">
              <div className="flex items-center gap-2">
                <span className="flex" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </span>
                <p className="text-xs text-muted-foreground">{t.testers}</p>
              </div>

              <h1 id="pdp-heading" className="mt-3 font-serif text-4xl leading-tight text-balance md:text-5xl">
                {t.title}
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">{t.subtitle}</p>

              <ul className="mt-4 flex flex-wrap gap-2" aria-label={t.chipsLabel}>
                {t.chips.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    {chip}
                  </li>
                ))}
              </ul>

              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">{t.description}</p>

              <div className="mt-8">
                <BuyBox variants={product.variants.nodes} />
              </div>
            </div>
          </div>
        </section>

        <HowToUse lang={lang} />
        <EffectTimeline lang={lang} />
        <ProductFacts lang={lang} />
        <Honesty />
        <Faq />
      </main>
      <SiteFooter lang={lang} />
      <CartDrawer />
      <StickyAtc variants={product.variants.nodes} />
    </>
  )
}
