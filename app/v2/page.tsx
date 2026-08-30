import type { Metadata } from "next"
import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { V2Hero } from "@/components/v2/v2-hero"
import { BenefitMarquee } from "@/components/v2/benefit-marquee"
import { BuySection } from "@/components/sections/buy-section"
import { WildBenefits } from "@/components/v2/wild-benefits"
import { HonestyStatement } from "@/components/sections/honesty-statement"
import { FormulaList } from "@/components/sections/formula-list"
import { AmbassadorQuote } from "@/components/v2/ambassador-quote"
import { Comparison } from "@/components/sections/comparison"
import { V2ImageBreak } from "@/components/v2/v2-image-break"
import { Reviews } from "@/components/sections/social-proof"
import { Faq } from "@/components/sections/faq"
import { ClosingCta } from "@/components/sections/closing-cta"

// Nudge-spåret: samma sida som startsidan i theme-v2 (grå palett, Fraunces),
// med balansbilden som hero och runclub-fotot som bildbreak.
export const metadata: Metadata = {
  title: "DYGN · V2",
  robots: { index: false, follow: false },
}

export default function V2Page() {
  return (
    <div className="theme-v2 bg-background text-foreground">
      <SiteHeader />
      <main>
        <V2Hero />
        <BenefitMarquee />
        <Suspense fallback={<div className="min-h-[60vh] bg-card" aria-hidden />}>
          <BuySection compact />
        </Suspense>
        <WildBenefits />
        <HonestyStatement />
        <FormulaList />
        <AmbassadorQuote />
        <Comparison />
        <V2ImageBreak />
        <Reviews />
        <Faq />
        <ClosingCta />
      </main>
      <SiteFooter />
      <CartDrawer />
    </div>
  )
}
