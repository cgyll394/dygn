import Image from "next/image"
import type { Lang } from "@/lib/i18n"
import { COPY } from "./effect-timeline.copy"

export function EffectTimeline({ lang }: { lang: Lang }) {
  const t = COPY[lang]

  return (
    <section className="bg-card py-20 md:py-28" aria-labelledby="timeline-heading">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <div className="flex flex-col">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{t.eyebrow}</p>
          <h2
            id="timeline-heading"
            className="mt-4 font-serif text-3xl leading-tight text-balance md:text-5xl"
          >
            {t.heading}
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">{t.intro}</p>
          <div className="relative mt-10 hidden aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg md:block">
            <Image
              src="/lifestyle/morning-table.jpg"
              alt={t.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
            />
          </div>
        </div>
        <ol className="flex flex-col">
          {t.phases.map((phase, index) => (
            <li
              key={phase.label}
              className={`flex gap-6 py-8 ${index < t.phases.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="flex flex-col items-center">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-foreground text-xs font-semibold">
                  {index + 1}
                </span>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{phase.label}</p>
                <h3 className="mt-1.5 font-serif text-xl md:text-2xl">{phase.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{phase.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground md:px-8">
        {t.footnote}
      </p>
    </section>
  )
}
