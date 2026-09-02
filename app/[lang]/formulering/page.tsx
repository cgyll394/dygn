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
import { alternatesFor } from "@/lib/i18n"
import { getLang, type LangParams } from "@/lib/lang-params"
import { COPY } from "./copy"

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await getLang(params)
  const t = COPY[lang]
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: alternatesFor(lang, "/formulering"),
  }
}

export default async function FormulaPage({ params }: LangParams) {
  const lang = await getLang(params)
  const t = COPY[lang]
  return (
    <>
      <SiteHeader />
      <main>
        <section className="-mt-20 bg-ink pb-4 pt-[8.5rem] text-ink-foreground md:-mt-24 md:pt-[11rem]">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-ink-muted">{t.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl font-fraunces text-4xl leading-[1.05] text-balance md:text-6xl">
              {t.heading}
            </h1>
          </div>
        </section>
        <Ingredients />
        <Comparison lang={lang} />
        <PriceComparison lang={lang} />
        <DygnStandard lang={lang} />
        <Philosophy lang={lang} />
        <ProductFacts lang={lang} />
        <ClosingCta lang={lang} />
      </main>
      <SiteFooter lang={lang} />
      <CartDrawer />
    </>
  )
}
