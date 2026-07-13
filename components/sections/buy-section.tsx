import { getProduct } from "@/lib/shopify"
import { ProductGallery } from "@/components/product/product-gallery"
import { BuyBox } from "@/components/product/buy-box"

export async function BuySection() {
  const product = await getProduct("dygn-daily-nutrition")

  if (!product) {
    return (
      <section id="kop" className="bg-background py-24 text-center">
        <p className="text-muted-foreground">Produkten kunde inte hämtas just nu. Försök igen strax.</p>
      </section>
    )
  }

  return (
    <section id="kop" className="scroll-mt-20 bg-background py-16 md:py-24" aria-labelledby="buy-heading">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <ProductGallery images={product.images.nodes} title={product.title} />
        <div className="flex flex-col">
          <p className="text-sm font-medium uppercase tracking-wide text-primary">Bästsäljare</p>
          <h2 id="buy-heading" className="mt-2 font-serif text-3xl text-foreground text-balance md:text-4xl">
            {product.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Åtta näringsämnen där det finns tydlig vetenskap, vanliga brister i nordisk kost, och bioaktiva former som
            kroppen faktiskt tar upp. En sachet om dagen, 30 portioner per förpackning.
          </p>
          <div className="mt-6">
            <BuyBox variants={product.variants.nodes} />
          </div>
        </div>
      </div>
    </section>
  )
}
