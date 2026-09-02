import Image from "next/image"
import { NavLink } from "@/components/nav-link"
import type { Lang } from "@/lib/i18n"
import { COPY } from "./closing-cta.copy"

export function ClosingCta({ lang }: { lang: Lang }) {
  const t = COPY[lang]
  return (
    <section className="relative flex min-h-[70svh] items-center justify-center overflow-hidden bg-ink">
      <Image
        src="/lifestyle/stockholm-winter.jpg"
        alt={t.imageAlt}
        fill
        className="object-cover object-[65%_30%] opacity-80 md:object-[50%_55%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/20" aria-hidden />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-5 py-24 text-center md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-ink-foreground/75">{t.eyebrow}</p>
        <h2 className="mt-5 font-fraunces text-4xl leading-tight text-ink-foreground text-balance md:text-6xl">
          {t.heading}
        </h2>
        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <NavLink
            to="/produkt"
            className="inline-flex min-h-[50px] items-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
          >
            {t.cta}
          </NavLink>
          <p className="text-sm text-ink-foreground/80">{t.note}</p>
        </div>
      </div>
    </section>
  )
}
