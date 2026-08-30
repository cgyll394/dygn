import { Truck, RotateCcw, ShieldCheck, Lock } from "lucide-react"
import { getProduct, type ProductImage } from "@/lib/shopify"
import { ProductGallery } from "@/components/product/product-gallery"
import { BuyBox } from "@/components/product/buy-box"
import { PaymentBadges } from "@/components/payment-badges"

const ASSURANCES = [
  { icon: Truck, text: "Levereras inom 2–4 vardagar" },
  { icon: RotateCcw, text: "30 dagars öppet köp" },
  { icon: ShieldCheck, text: "Tredjepartstestad, tillverkad i Sverige" },
  { icon: Lock, text: "Säker betalning. Dela upp med Klarna" },
]

const GALLERY: ProductImage[] = [
  { url: "/product/dygn-float.jpg", altText: "DYGN-sachet svävande mot koboltblå bakgrund", width: 1600, height: 1986 },
  { url: "/product/dygn-sachet-auto.jpg", altText: "DYGN Daily Essential-sachet stående i varmt ljus", width: 1600, height: 1986 },
  { url: "/product/dygn-hand.jpg", altText: "DYGN-sachet i en hand mot varmt ljus", width: 1800, height: 2234 },
  { url: "/product/dygn-packshot.jpg", altText: "DYGN Daily Essential-sachet, studiofoto", width: 1600, height: 2399 },
  { url: "/product/dygn-box-open.jpg", altText: "Öppnad DYGN-ask med 30 sachets", width: 1800, height: 1344 },
]

export async function BuySection({ compact = false }: { compact?: boolean }) {
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
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <ProductGallery images={GALLERY} title={product.title} />
          <div className="flex flex-col md:pt-2">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Daily Nutrition · 30 sachets</p>
            <h2 id="buy-heading" className="mt-3 font-serif text-4xl text-foreground text-balance md:text-5xl">
              Bara det viktiga. Inget onödigt.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              {"Åtta näringsämnen i en sachet. Löses i vatten. Mild citrus, utan tillsatt socker."}
            </p>
            <div className="mt-8">
              <BuyBox variants={product.variants.nodes} compact={compact} />
            </div>
          </div>
        </div>

        {/* Compact: trygghets-rad + betalmärken centrerat under hela avsnittet */}
        {compact && (
          <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center gap-7 border-t border-border pt-10 md:mt-16">
            <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
              {ASSURANCES.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Icon className="h-4 w-4 shrink-0 text-foreground" aria-hidden="true" />
                  {text}
                </li>
              ))}
            </ul>
            <PaymentBadges className="justify-center" />
          </div>
        )}
      </div>
    </section>
  )
}
