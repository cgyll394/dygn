import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { Hero } from "@/components/sections/hero"
import { Reviews } from "@/components/sections/social-proof"
import { BuySection } from "@/components/sections/buy-section"
import { WhyDygn } from "@/components/sections/why-dygn"
import { Ingredients } from "@/components/sections/ingredients"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Philosophy } from "@/components/sections/lifestyle"
import { DygnStandard } from "@/components/sections/dygn-standard"
import { Faq } from "@/components/sections/faq"
import { ClosingCta } from "@/components/sections/closing-cta"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-[60vh] bg-card" aria-hidden />}>
          <BuySection />
        </Suspense>
        <WhyDygn />
        <Ingredients />
        <HowItWorks />
        <Philosophy />
        <Reviews />
        <DygnStandard />
        <Faq />
        <ClosingCta />
      </main>
      <SiteFooter />
      <CartDrawer />
    </>
  )
}
