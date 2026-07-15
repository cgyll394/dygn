import { getProduct, type ProductImage } from "@/lib/shopify"
import { ProductGallery } from "@/components/product/product-gallery"
import { BuyBox } from "@/components/product/buy-box"

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
      <section id="kop" className="bg-card py-24 text-center">
        <p className="text-muted-foreground">Produkten kunde inte hämtas just nu. Försök igen strax.</p>
      </section>
    )
  }

  return (
    <section id="kop" className="scroll-mt-20 bg-card py-16 md:py-24" aria-labelledby="buy-heading">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <ProductGallery images={[HAND_SHOT, ...product.images.nodes.slice(1)]} title={product.title} />
        <div className="flex flex-col md:pt-2">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Daily Nutrition · 30 sachets</p>
          <h2 id="buy-heading" className="mt-3 font-serif text-4xl text-foreground text-balance md:text-5xl">
            Allt du behöver. Inget du inte behöver.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Åtta näringsämnen i bioaktiva former, doserade efter forskning — inte marknadsföring. En sachet om dagen.
          </p>
          <div className="mt-8">
            <BuyBox variants={product.variants.nodes} />
          </div>
        </div>
      </div>
    </section>
  )
}
