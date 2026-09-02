import Link from "next/link"
import { Check } from "lucide-react"
import { localePath, type Lang } from "@/lib/i18n"
import { COPY } from "./price-comparison.copy"

export function PriceComparison({ lang }: { lang: Lang }) {
  const t = COPY[lang]

  return (
    <section className="bg-card py-16 md:py-24" aria-labelledby="price-comparison-heading">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 id="price-comparison-heading" className="font-serif text-3xl text-foreground text-balance md:text-5xl">
          {t.heading}
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">{t.intro}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
          <div className="rounded-lg border border-border bg-background p-6 md:p-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {t.separateHeading}
            </h3>
            <ul className="mt-6">
              {t.separate.map((row, index) => (
                <li
                  key={row.name}
                  className={`flex items-baseline justify-between gap-4 py-2.5 ${
                    index < t.separate.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="text-sm text-muted-foreground">{row.name}</span>
                  <span className="text-sm tabular-nums text-foreground">{row.price}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-baseline justify-between border-t-2 border-foreground pt-4">
              <span className="text-sm font-semibold">{t.perMonth}</span>
              <span className="font-serif text-2xl tabular-nums">{t.separateTotal}</span>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">{t.separateNote}</p>
          </div>

          <div className="flex flex-col rounded-lg bg-ink p-6 text-ink-foreground md:p-8">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{t.dygnHeading}</h3>
              <span className="text-[11px] uppercase tracking-[0.12em] text-ink-muted">{t.dygnBadge}</span>
            </div>
            <ul className="mb-8 mt-7 flex flex-col gap-3">
              {t.dygnPoints.map((row) => (
                <li key={row} className="flex items-center gap-3 text-sm text-ink-foreground/85">
                  <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                  {row}
                </li>
              ))}
            </ul>
            <div className="mt-auto border-t border-ink-foreground/20 pt-5">
              <p className="text-[11px] uppercase tracking-[0.14em] text-ink-muted">{t.dygnPerMonth}</p>
              <div className="mt-1.5 flex flex-wrap items-baseline gap-x-3">
                <span className="font-serif text-5xl tabular-nums">{t.dygnPrice}</span>
                <span className="text-sm text-ink-foreground/70">{t.dygnPerDay}</span>
              </div>
            </div>
            <Link
              href={localePath(lang, "/produkt")}
              className="mt-7 inline-flex min-h-[48px] items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
            >
              {t.cta}
            </Link>
          </div>
        </div>

        <p className="mt-5 max-w-2xl text-[11px] leading-relaxed text-muted-foreground">{t.footnote}</p>
      </div>
    </section>
  )
}
