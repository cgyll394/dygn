import { Suspense } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { Hero } from "@/components/sections/hero"
import { Marquee, Reviews, DoctorQuote } from "@/components/sections/social-proof"
import { BuySection } from "@/components/sections/buy-section"
import { Ingredients } from "@/components/sections/ingredients"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Comparison } from "@/components/sections/comparison"
import { Philosophy, LifestyleGrid } from "@/components/sections/lifestyle"
import { Faq } from "@/components/sections/faq"

export default function HomePage() {
  return (
    <>
      <div className="bg-primary py-2 text-center">
        <Link href="#kop" className="font-serif text-sm text-primary-foreground">
          Lansering hösten 2026. Anmäl dig först.
        </Link>
      </div>
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Suspense fallback={<div className="min-h-[60vh] bg-background" aria-hidden />}>
          <BuySection />
        </Suspense>
        <Ingredients />
        <HowItWorks />
        <Philosophy />
        <Comparison />
        <Reviews />
        <DoctorQuote />
        <Faq />
        <LifestyleGrid />
      </main>
      <SiteFooter />
      <CartDrawer />
    </>
  )
}
