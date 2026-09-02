import { HeroVideo } from "@/components/v2/hero-video"
import type { Lang } from "@/lib/i18n"
import { COPY } from "@/components/sections/pdp/how-to-use.copy"

// V2-produktsidan: pour-videon i full bredd, med Riv/Rör/Drick-stegen i ett
// flytande, indelat kort som lägger sig över videons nederkant.
export function HowToUseVideo({ lang }: { lang: Lang }) {
  const t = COPY[lang]

  return (
    <section className="overflow-hidden bg-background pb-16 pt-16 md:pb-24 md:pt-24" aria-labelledby="how-to-use-heading">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{t.eyebrow}</p>
        <h2 id="how-to-use-heading" className="mt-3 font-serif text-3xl text-foreground text-balance md:text-4xl">
          {t.heading}
        </h2>
      </div>

      {/* Full bredd, kant till kant — kanterna fadear in i sektionen så videon
          inte ligger som ett hårt block i det grå bandet. */}
      <div className="relative mt-8 w-full md:mt-10">
        <HeroVideo
          src="/video/dygn-pour.mp4"
          className="aspect-[16/10] max-h-[70svh] w-full object-cover md:aspect-video"
          objectPosition="50% 40%"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background to-transparent md:h-28" aria-hidden />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent md:h-32" aria-hidden />
      </div>

      {/* Flytande, indelat kort över videons nederkant */}
      <div className="relative z-10 mx-auto -mt-14 max-w-4xl px-5 md:-mt-20 md:px-8">
        <ol className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-[0_10px_44px_rgba(15,15,13,0.12)] divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {t.steps.map((step) => (
            <li key={step.number} className="flex flex-col p-6 md:p-8">
              <span className="font-serif text-3xl leading-none text-primary" aria-hidden>
                {step.number}
              </span>
              <h3 className="mt-3 text-base font-semibold text-foreground">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
