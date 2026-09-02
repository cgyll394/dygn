import type { Lang } from "@/lib/i18n"
import { COPY } from "./benefits.copy"

export function Benefits({ lang }: { lang: Lang }) {
  const t = COPY[lang]
  return (
    <section className="bg-background py-16 md:py-24" aria-labelledby="benefits-heading">
      <div className="mx-auto max-w-7xl md:px-8">
        <div className="px-5 md:px-0">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">{t.eyebrow}</p>
          <h2 id="benefits-heading" className="mt-3 max-w-xl font-serif text-3xl text-foreground text-balance md:text-5xl">
            {t.heading}
          </h2>
        </div>
        <div className="snap-row mt-8 gap-4 px-5 md:mt-10 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 lg:grid-cols-4">
          {t.items.map((benefit) => (
            <article
              key={benefit.number}
              className="snap-item flex w-[78vw] max-w-[330px] flex-col rounded-lg bg-card p-6 md:w-auto md:max-w-none md:p-7"
            >
              <p className="font-serif text-xl text-primary" aria-hidden>
                {benefit.number}
              </p>
              <h3 className="mt-3 text-base font-semibold text-foreground">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
