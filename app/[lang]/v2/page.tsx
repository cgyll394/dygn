import type { Metadata } from "next"
import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { V2Hero } from "@/components/v2/v2-hero"
import { BenefitMarquee } from "@/components/v2/benefit-marquee"
import { BuySection } from "@/components/sections/buy-section"
import { WildBenefits } from "@/components/v2/wild-benefits"
import { V2Honesty } from "@/components/v2/v2-honesty"
import { FormulaList } from "@/components/sections/formula-list"
import { AmbassadorQuote } from "@/components/v2/ambassador-quote"
import { Comparison } from "@/components/sections/comparison"
import { V2ImageBreak } from "@/components/v2/v2-image-break"
import { Reviews } from "@/components/sections/social-proof"
import { Faq } from "@/components/sections/faq"
import { ClosingCta } from "@/components/sections/closing-cta"
import { getLang, type LangParams } from "@/lib/lang-params"

// Nudge-spåret: samma sida som startsidan i theme-v2 (grå palett, Fraunces),
// med balansbilden som hero och runclub-fotot som bildbreak.
export const metadata: Metadata = {
  title: "DYGN · V2",
  robots: { index: false, follow: false },
}

export default async function V2Page({ params }: LangParams) {
  const lang = await getLang(params)
  return (
    <div className="theme-v2 bg-background text-foreground">
      <SiteHeader />
      <main>
        <V2Hero lang={lang} />
        <BenefitMarquee lang={lang} />
        <Suspense fallback={<div className="min-h-[60vh] bg-card" aria-hidden />}>
          <BuySection lang={lang} compact />
        </Suspense>
        <WildBenefits />
        <AmbassadorQuote lang={lang} />
        <V2Honesty lang={lang} />
        <FormulaList lang={lang} />
        <V2ImageBreak lang={lang} />
        <Comparison lang={lang} />
        <Reviews lang={lang} />
        <Faq />
        <ClosingCta lang={lang} />
      </main>
      <SiteFooter lang={lang} />
      <CartDrawer />
    </div>
  )
}
