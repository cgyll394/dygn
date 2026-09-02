import { Star, Droplets, FlaskConical, Leaf, MapPin } from "lucide-react"
import type { Lang } from "@/lib/i18n"
import { COPY } from "./social-proof.copy"

/** Ikoner i samma ordning som COPY[lang].marquee.badges */
const BADGE_ICONS = [MapPin, FlaskConical, Leaf, Droplets]

export function Marquee({ lang }: { lang: Lang }) {
  const t = COPY[lang].marquee
  const loops = Array.from({ length: 3 })
  return (
    <div className="overflow-hidden border-y border-border bg-background py-4" aria-hidden>
      <div className="flex w-max animate-marquee items-center">
        {loops.map((_, loop) => (
          <div key={loop} className="flex items-center">
            {BADGE_ICONS.map((Icon, i) => {
              const text = t.badges[i]
              return (
                <span
                  key={`${loop}-${text}`}
                  className="mx-8 flex items-center gap-2.5 whitespace-nowrap text-xs font-medium uppercase tracking-[0.16em] text-foreground"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  {text}
                </span>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export function Reviews({ lang }: { lang: Lang }) {
  const t = COPY[lang].reviews
  return (
    <section className="bg-secondary py-16 md:py-24" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="reviews-heading" className="font-serif text-3xl text-foreground text-balance md:text-5xl">
            {t.heading}
          </h2>
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden />
            ))}
            <span className="ml-1">{t.average}</span>
          </p>
        </div>
        <div className="snap-row mt-10 gap-4 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible">
          {t.items.map((review) => (
            <figure
              key={review.name}
              className="snap-item flex w-[82vw] max-w-[360px] flex-col justify-between rounded-lg bg-card p-7 md:w-auto md:max-w-none"
            >
              <div>
                <div className="flex gap-1" aria-label={t.starsLabel}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" aria-hidden />
                  ))}
                </div>
                <p className="mt-4 font-serif text-lg text-foreground">{review.title}</p>
                <blockquote className="mt-2 text-sm leading-relaxed text-muted-foreground">{review.text}</blockquote>
              </div>
              <figcaption className="mt-6 text-xs font-medium uppercase tracking-[0.14em] text-foreground">
                {review.name}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-[11px] leading-relaxed text-muted-foreground">{t.disclaimer}</p>
      </div>
    </section>
  )
}

export function DoctorQuote({ lang }: { lang: Lang }) {
  const t = COPY[lang].doctor
  return (
    <section className="bg-ink py-20 md:py-28" aria-labelledby="doctor-quote">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-ink-muted">{t.byline}</p>
        <blockquote
          id="doctor-quote"
          className="mt-8 max-w-5xl font-serif text-2xl leading-snug text-ink-foreground text-pretty sm:text-3xl md:text-5xl md:leading-[1.15]"
        >
          {t.quote}
        </blockquote>
        <div className="mt-10 h-px w-24 bg-primary" aria-hidden />
      </div>
    </section>
  )
}
