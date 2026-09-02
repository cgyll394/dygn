import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { PaymentBadges } from "@/components/payment-badges"
import { localePath, type Lang } from "@/lib/i18n"
import { COPY } from "./hero.copy"

export function Hero({ lang }: { lang: Lang }) {
  const t = COPY[lang]
  return (
    <section className="relative -mt-20 flex min-h-[100svh] items-end overflow-hidden bg-ink md:-mt-24">
      <Image
        src="/lifestyle/runclub-bottle.jpg"
        alt={t.imageAlt}
        fill
        priority
        className="object-cover object-[50%_20%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-ink/25" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-10 md:px-8 md:pb-14">
        <p className="mb-4 hidden items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-foreground/80 sm:flex">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
          {t.eyebrow}
        </p>
        <h1 className="max-w-2xl font-fraunces text-[2.75rem] leading-[1.03] text-ink-foreground text-balance sm:text-5xl md:max-w-3xl md:text-7xl">
          {t.heading}
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-ink-foreground/85 md:text-lg">
          {t.leadA}
          <br className="sm:hidden" />
          {t.leadB}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
          <PaymentBadges only={["klarna", "applepay"]} tone="dark" lang={lang} />
          <span className="text-xs text-ink-foreground/75">{t.paymentNote}</span>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href="#kop"
            className="inline-flex min-h-[50px] items-center rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
          >
            {t.ctaPrimary}
          </Link>
          <Link
            href={localePath(lang, "/formulering")}
            className="hidden min-h-[50px] items-center rounded-full border border-ink-foreground/40 px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-ink-foreground transition-colors hover:bg-ink-foreground/10 sm:inline-flex"
          >
            {t.ctaSecondary}
          </Link>
        </div>
        <div className="mt-5 hidden flex-wrap items-center gap-x-6 gap-y-2 md:flex">
          <span className="flex items-center gap-1.5" aria-label={t.ratingLabel}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" aria-hidden />
            ))}
            <span className="ml-1 text-xs text-ink-foreground/75">{t.ratingCaption}</span>
          </span>
        </div>
      </div>
    </section>
  )
}
