import { getProduct, type ProductImage } from "@/lib/shopify"
import { ProductGallery } from "@/components/product/product-gallery"
import { BuyBox } from "@/components/product/buy-box"
import { Reveal } from "@/components/reveal"

const HAND_SHOT: ProductImage = {
  url: "/product/dygn-hand.jpg",
  altText: "DYGN-sachet i en hand mot varmt ljus",
  width: 1800,
  height: 2234,
}

export async function BuySection() {
  const product = await getProduct("dygn-daily-nutrition")

  if (!product) {
    return (
      <section id="kop" className="border-b border-border py-24 text-center">
        <p className="text-muted-foreground">Produkten kunde inte hämtas just nu. Försök igen strax.</p>
      </section>
    )
  }

  const gallery = [HAND_SHOT, ...product.images.nodes]

  return (
    <section id="kop" className="scroll-mt-24 border-b border-border" aria-labelledby="buy-heading">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:gap-20 md:px-8 md:py-28">
        <Reveal>
          <ProductGallery images={gallery} title={product.title} />
        </Reveal>
        <div className="flex flex-col md:pt-4">
          <Reveal>
            <p className="type-eyebrow">Daily Nutrition · 30 sachets</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="buy-heading" className="type-title mt-5">
              Allt du behöver. Inget du inte behöver.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="type-lede mt-5 max-w-md">
              Åtta näringsämnen i bioaktiva former, doserade efter forskning — inte marknadsföring. En sachet om
              dagen, löst i ett glas vatten.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10">
              <BuyBox variants={product.variants.nodes} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
