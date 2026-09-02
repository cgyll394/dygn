import Image from "next/image"
import { DayDotsRow } from "@/components/day-dots-row"
import type { Lang } from "@/lib/i18n"
import { COPY } from "./v2-image-break.copy"

// Balansbilden (asken på ett finger) som tidigare var v2-hero lever vidare här.
// Porträtt på mobil, den utökade bilden på desktop — asken sitter uppe till
// höger, texten nere till vänster.
export function V2ImageBreak({ lang }: { lang: Lang }) {
  const t = COPY[lang]
  return (
    <section className="relative flex min-h-[85svh] items-end overflow-hidden bg-ink" aria-label={t.sectionLabel}>
      <Image
        src="/product/dygn-box-balance.jpg"
        alt={t.imageAlt}
        fill
        className="object-cover object-[50%_18%] md:hidden"
        sizes="100vw"
      />
      <Image
        src="/product/dygn-box-balance-wide.jpg"
        alt={t.imageAlt}
        fill
        className="hidden object-cover object-[50%_22%] md:block"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" aria-hidden />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 md:px-8 md:pb-16">
        <p className="max-w-xl font-fraunces text-3xl leading-tight text-ink-foreground text-balance md:text-5xl">
          {t.heading}
        </p>
        <DayDotsRow className="mt-6 flex" />
      </div>
    </section>
  )
}
