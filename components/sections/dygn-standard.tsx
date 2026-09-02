import type { Lang } from "@/lib/i18n"
import { COPY } from "./dygn-standard.copy"

export function DygnStandard({ lang }: { lang: Lang }) {
  const t = COPY[lang]

  return (
    <section className="bg-ink py-20 md:py-28" aria-labelledby="standard-heading">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-ink-muted">{t.eyebrow}</p>
        <h2
          id="standard-heading"
          className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-ink-foreground text-balance md:text-5xl"
        >
          {t.heading}
        </h2>
        <div className="mt-10 grid gap-x-10 gap-y-8 border-t border-ink-foreground/15 pt-10 sm:grid-cols-2 lg:grid-cols-4 md:mt-12">
          {t.pillars.map((pillar, index) => (
            <div key={pillar.title}>
              <p className="font-serif text-xl text-primary" aria-hidden>{`0${index + 1}`}</p>
              <h3 className="mt-3 text-base font-semibold text-ink-foreground">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-foreground/70">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
