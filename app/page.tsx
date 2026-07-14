import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { Hero } from "@/components/sections/hero"
import { StatementBand } from "@/components/sections/statement-band"
import { Reviews } from "@/components/sections/social-proof"
import { BuySection } from "@/components/sections/buy-section"
import { Ingredients } from "@/components/sections/ingredients"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Movement } from "@/components/sections/movement"
import { Faq } from "@/components/sections/faq"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <StatementBand />
        <Suspense fallback={<div className="min-h-[60vh] bg-background" aria-hidden />}>
          <BuySection />
        </Suspense>
        <Ingredients />
        <HowItWorks />
        <Movement />
        <Reviews />
        <Faq />
      </main>
      <SiteFooter />
      <CartDrawer />
    </>
  )
}
