import { HeroVideo } from "@/components/v2/hero-video"
import type { Lang } from "@/lib/i18n"
import { COPY } from "@/components/sections/pdp/how-to-use.copy"

// V2-produktsidan: pour-videon i full bredd, ihopkopplad med Riv/Rör/Drick-
// stegen (i stället för bilden på löparen). Återanvänder how-to-use-copyn.
export function HowToUseVideo({ lang }: { lang: Lang }) {
  const t = COPY[lang]

  return (
    <section className="border-y border-border bg-background py-16 md:py-24" aria-labelledby="how-to-use-heading">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{t.eyebrow}</p>
        <h2 id="how-to-use-heading" className="mt-3 font-serif text-3xl text-foreground text-balance md:text-4xl">
          {t.heading}
        </h2>
      </div>

      {/* Full bredd, kant till kant */}
      <div className="mt-10 w-full md:mt-14">
        <HeroVideo src="/video/dygn-pour.mp4" className="aspect-video max-h-[76svh] w-full object-cover" objectPosition="50% 42%" />
      </div>

      <ol className="mx-auto mt-10 grid max-w-5xl gap-8 px-5 sm:grid-cols-3 md:mt-14 md:gap-10 md:px-8">
        {t.steps.map((step) => (
          <li key={step.number} className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <span className="font-serif text-2xl text-primary" aria-hidden>
              {step.number}
            </span>
            <h3 className="mt-2 text-lg font-medium text-foreground">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
