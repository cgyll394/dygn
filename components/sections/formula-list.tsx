import Link from "next/link"
import { localePath, type Lang } from "@/lib/i18n"
import { COPY } from "./formula-list.copy"

export function FormulaList({ lang }: { lang: Lang }) {
  const t = COPY[lang]
  return (
    <section id="formula" aria-labelledby="formula-heading" className="scroll-mt-20 bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">{t.eyebrow}</p>
            <h2 id="formula-heading" className="mt-4 font-fraunces text-4xl leading-tight text-balance md:text-5xl">
              {t.heading}
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-foreground/70">{t.text}</p>
            <Link
              href={localePath(lang, "/formulering")}
              className="mt-8 inline-flex min-h-[44px] items-center rounded-full bg-ink-foreground px-6 text-sm font-medium text-ink transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {t.link}
            </Link>
          </div>

          <ul className="divide-y divide-ink-foreground/15 border-y border-ink-foreground/15">
            {t.rows.map((row) => (
              <li key={row.name} className="flex items-baseline gap-4 py-4 md:py-5">
                <span className="w-32 shrink-0 font-serif text-lg md:w-44 md:text-xl">{row.name}</span>
                <span className="flex-1 text-xs text-ink-foreground/50">{row.form}</span>
                <span className="text-sm font-medium tabular-nums text-primary">{row.dose}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
