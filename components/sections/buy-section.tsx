import { getProduct } from "@/lib/shopify"
import { ProductGallery } from "@/components/product/product-gallery"
import { BuyBox } from "@/components/product/buy-box"

export async function BuySection() {
  const product = await getProduct("dygn-daily-nutrition")

  if (!product) {
    return (
      <section id="kop" className="border-b border-border py-24 text-center">
        <p className="text-muted-foreground">Produkten kunde inte hämtas just nu. Försök igen strax.</p>
      </section>
    )
  }

  return (
    <section id="kop" className="scroll-mt-24 border-b border-border" aria-labelledby="buy-heading">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:gap-20 md:px-8 md:py-28">
        <ProductGallery images={product.images.nodes} title={product.title} />
        <div className="flex flex-col md:pt-4">
          <p className="type-eyebrow">Daily Nutrition · 30 sachets</p>
          <h2 id="buy-heading" className="type-title mt-5">
            Allt du behöver. Inget du inte behöver.
          </h2>
          <p className="type-lede mt-5 max-w-md">
            Åtta näringsämnen i bioaktiva former, doserade efter forskning — inte marknadsföring. En sachet om dagen,
            löst i ett glas vatten.
          </p>
          <div className="mt-10">
            <BuyBox variants={product.variants.nodes} />
          </div>
        </div>
      </div>
    </section>
  )
}
