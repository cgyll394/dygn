import Link from "next/link"
import { Star } from "lucide-react"
import { HeroVideo } from "@/components/v2/hero-video"
import { NavLink } from "@/components/nav-link"
import { PaymentBadges } from "@/components/payment-badges"
import type { Lang } from "@/lib/i18n"
import { COPY } from "./v2-hero.copy"

// V2-heron: fullskärm på båda brytpunkterna med produktvideon som bakgrund.
// Videon är ljus och center-vägd, så copyn ligger på en mörkare scrim
// (mobil: nedtill, desktop: vänster halva). Produkten hålls i mitten/höger.
export function V2Hero({ lang }: { lang: Lang }) {
  const t = COPY[lang]
  return (
    <section className="relative -mt-20 overflow-hidden bg-[#c6ced0] md:-mt-24">
      {/* Mobil */}
      <div className="relative flex min-h-[100svh] flex-col justify-end md:hidden">
        <HeroVideo className="absolute inset-0 h-full w-full bg-[#c6ced0] object-cover" objectPosition="50% 42%" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-ink/20 to-ink/80" aria-hidden />
        <div className="relative z-10 flex flex-col items-center gap-3 px-6 pb-11 text-center [text-shadow:0_2px_18px_rgba(15,15,13,0.5)]">
          <h1 className="font-fraunces text-[1.9rem] leading-[1.1] text-ink-foreground text-balance">
            {t.heading}
          </h1>
          <p className="text-[13px] leading-relaxed text-ink-foreground/90">
            {t.leadMobile}
          </p>
          <div className="mt-2 flex items-center gap-4">
            <Link
              href="#kop"
              className="rounded-full bg-primary px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
            >
              {t.cta}
            </Link>
            <NavLink
              to="/formulering"
              className="text-[10px] font-medium uppercase tracking-[0.14em] text-ink-foreground/80 underline underline-offset-4"
            >
              {t.formulaLink}
            </NavLink>
          </div>
          <PaymentBadges lang={lang} only={["klarna", "applepay"]} tone="dark" brandedFill className="mt-1 justify-center" />
        </div>
      </div>

      {/* Desktop: videon i fullbredd, copy över en mörkare vänsterhalva */}
      <div className="relative hidden md:block">
        <HeroVideo className="absolute inset-0 h-full w-full bg-[#c6ced0] object-cover" objectPosition="50% 45%" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-ink/20 to-transparent" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" aria-hidden />
        <div className="relative z-10 flex min-h-[100svh] w-1/2 flex-col justify-center px-12 pb-28 pt-32 [text-shadow:0_2px_22px_rgba(15,15,13,0.5)] lg:px-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink-foreground/70">
            {t.eyebrow}
          </p>
          <h1 className="mt-6 max-w-xl font-fraunces text-5xl leading-[1.05] text-ink-foreground text-balance lg:text-6xl">
            {t.heading}
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-foreground/90">
            {t.leadDesktop}
          </p>
          <div className="mt-9 flex items-center gap-6">
            <Link
              href="#kop"
              className="inline-flex min-h-[40px] items-center rounded-full bg-primary px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
            >
              {t.cta}
            </Link>
            <NavLink
              to="/formulering"
              className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-foreground/75 underline underline-offset-4 transition-colors hover:text-ink-foreground"
            >
              {t.formulaLink}
            </NavLink>
          </div>

          {/* Trust: en tunn rad längst ner, ur vägen för budskapet. Begränsad
              till copyns bredd så linjen och betalmärkena hålls till vänster. */}
          <div className="absolute bottom-10 left-12 right-6 flex max-w-md items-center justify-between border-t border-ink-foreground/20 pt-5 lg:left-20">
            <span className="flex items-center gap-1.5" aria-label={t.ratingLabel}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-primary text-primary" aria-hidden />
              ))}
              <span className="ml-1.5 text-[11px] text-ink-foreground/70">{t.ratingCaption}</span>
            </span>
            <PaymentBadges lang={lang} only={["klarna", "applepay"]} />
          </div>
        </div>
      </div>
    </section>
  )
}
