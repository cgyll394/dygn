import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { Hero } from "@/components/sections/hero"
import { BuySection } from "@/components/sections/buy-section"
import { Benefits } from "@/components/sections/benefits"
import { HonestyStatement } from "@/components/sections/honesty-statement"
import { FormulaList } from "@/components/sections/formula-list"
import { Comparison } from "@/components/sections/comparison"
import { ImageBreak } from "@/components/sections/image-break"
import { Reviews } from "@/components/sections/social-proof"
import { Faq } from "@/components/sections/faq"
import { ClosingCta } from "@/components/sections/closing-cta"
import { getLang, type LangParams } from "@/lib/lang-params"

export default async function HomePage({ params }: LangParams) {
  const lang = await getLang(params)
  return (
    <>
      <SiteHeader />
      <main>
        <Hero lang={lang} />
        <Suspense fallback={<div className="min-h-[60vh] bg-card" aria-hidden />}>
          <BuySection lang={lang} />
        </Suspense>
        <Benefits lang={lang} />
        <HonestyStatement lang={lang} />
        <FormulaList lang={lang} />
        <Comparison lang={lang} />
        <ImageBreak lang={lang} />
        <Reviews lang={lang} />
        <Faq />
        <ClosingCta lang={lang} />
      </main>
      <SiteFooter lang={lang} />
      <CartDrawer />
    </>
  )
}
