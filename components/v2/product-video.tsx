import { HeroVideo } from "@/components/v2/hero-video"
import type { Lang } from "@/lib/i18n"
import { COPY } from "./product-video.copy"

// Produktsidan (v2): pour-videon som ett "löses i vatten"-moment. Videon är
// 16:9 och ligger i en rundad ram — obeskuren, med en kort rubrik ovanför.
export function ProductVideo({ lang }: { lang: Lang }) {
  const t = COPY[lang]
  return (
    <section className="bg-background py-16 md:py-24" aria-labelledby="product-video-heading">
      <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">{t.eyebrow}</p>
        <h2
          id="product-video-heading"
          className="mt-3 font-serif text-3xl text-foreground text-balance md:text-5xl"
        >
          {t.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{t.text}</p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-[0_2px_24px_rgba(15,15,13,0.08)]">
          <HeroVideo
            src="/video/dygn-pour.mp4"
            className="aspect-video w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
