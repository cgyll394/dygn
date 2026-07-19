import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { Ingredients } from "@/components/sections/ingredients"
import { Comparison } from "@/components/sections/comparison"
import { PriceComparison } from "@/components/sections/price-comparison"
import { DygnStandard } from "@/components/sections/dygn-standard"
import { Philosophy } from "@/components/sections/lifestyle"
import { ProductFacts } from "@/components/sections/pdp/product-facts"
import { ClosingCta } from "@/components/sections/closing-cta"

export const metadata: Metadata = {
  title: "Formuleringen: åtta näringsämnen, förklarade | DYGN",
  description:
    "Varje näringsämne i DYGN: varför det ingår, vilken form vi valt och varför dosen är vad den är. Allt deklarerat.",
}

export default function FormulaPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="-mt-20 bg-ink pb-4 pt-[8.5rem] text-ink-foreground md:-mt-24 md:pt-[11rem]">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-ink-muted">Formuleringen</p>
            <h1 className="mt-4 max-w-3xl font-fraunces text-4xl leading-[1.05] text-balance md:text-6xl">
              Varje ämne. Varje dos. Förklarat.
            </h1>
          </div>
        </section>
        <Ingredients />
        <Comparison />
        <PriceComparison />
        <DygnStandard />
        <Philosophy />
        <ProductFacts />
        <ClosingCta />
      </main>
      <SiteFooter />
      <CartDrawer />
    </>
  )
}
