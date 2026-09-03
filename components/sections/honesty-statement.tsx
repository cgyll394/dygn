import Image from "next/image"
import Link from "next/link"
import { localePath, type Lang } from "@/lib/i18n"
import { COPY } from "./honesty-statement.copy"

export function HonestyStatement({ lang }: { lang: Lang }) {
  const t = COPY[lang]
  return (
    <section className="relative flex min-h-[85svh] items-center overflow-hidden bg-ink" aria-labelledby="honesty-statement-heading">
      <Image
        src="/lifestyle/pool.jpg"
        alt={t.imageAlt}
        fill
        className="object-cover object-[50%_35%] opacity-60"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/60" aria-hidden />
      <div className="relative z-10 mx-auto max-w-4xl px-5 py-24 text-center md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-foreground/70">{t.eyebrow}</p>
        <h2
          id="honesty-statement-heading"
          className="mx-auto mt-5 font-fraunces text-4xl leading-[1.05] text-ink-foreground text-balance sm:text-5xl md:text-7xl"
        >
          {t.heading}
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink-foreground/85">{t.text}</p>
        <Link
          href={localePath(lang, "/formulering")}
          className="mt-8 inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-ink-foreground underline decoration-ink-foreground/40 underline-offset-[6px] transition-colors hover:decoration-ink-foreground"
        >
          {t.link}
        </Link>

        {/* Förtroende-seals — endast v2 (.v2-trust styr display via CSS) */}
        <div className="v2-trust mx-auto mt-12 max-w-md gap-5 border-t border-ink-foreground/15 pt-9">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-2 shadow-[0_2px_14px_rgba(0,0,0,0.18)] sm:h-14 sm:w-14 sm:p-2.5">
              <Image
                src="/trust/haccp.svg"
                alt={t.haccpAlt}
                width={44}
                height={44}
                className="h-full w-full object-contain"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
