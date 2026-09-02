import Image from "next/image"
import Link from "next/link"
import { localePath, type Lang } from "@/lib/i18n"
import { COPY } from "./v2-honesty.copy"

// V2-only. Kvalitetssektion med två bilder (citron + mineralkristaller) som
// bakgrund, sida vid sida bred till bred. Texten ligger över, vit, med en
// mörk scrim bakom för läsbarhet.
export function V2Honesty({ lang }: { lang: Lang }) {
  const t = COPY[lang]
  return (
    <section
      className="relative flex min-h-[82svh] items-center overflow-hidden bg-ink"
      aria-labelledby="v2-honesty-heading"
    >
      {/* Två bilder som bakgrund, bredvid varandra */}
      <div className="absolute inset-0 grid grid-cols-2" aria-hidden>
        <div className="relative">
          <Image src="/lifestyle/quality-lemon.jpg" alt="" fill className="object-cover" sizes="50vw" />
        </div>
        <div className="relative">
          <Image src="/lifestyle/quality-crystals.jpg" alt="" fill className="object-cover" sizes="50vw" />
        </div>
      </div>

      {/* Mörk scrim för läsbarhet — lätt */}
      <div className="absolute inset-0 bg-ink/12" aria-hidden />
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 58% 78% at 50% 50%, rgba(15,15,13,0.55) 0%, rgba(15,15,13,0.28) 55%, rgba(15,15,13,0.05) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-2xl px-5 py-24 text-center md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-foreground/70">{t.eyebrow}</p>
        <h2
          id="v2-honesty-heading"
          className="mx-auto mt-5 font-fraunces text-4xl leading-[1.05] text-ink-foreground text-balance sm:text-5xl md:text-6xl"
        >
          {t.heading}
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink-foreground/85">
          {t.text}
        </p>
        <Link
          href={localePath(lang, "/formulering")}
          className="mt-8 inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-ink-foreground underline decoration-ink-foreground/40 underline-offset-[6px] transition-colors hover:decoration-ink-foreground"
        >
          {t.link}
        </Link>

        <div className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-2.5 border-t border-ink-foreground/20 pt-9 sm:gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-2 shadow-[0_2px_14px_rgba(0,0,0,0.2)] sm:h-14 sm:w-14 sm:p-2.5">
            <Image
              src="/trust/haccp.svg"
              alt={t.haccpAlt}
              width={44}
              height={44}
              className="h-full w-full object-contain"
            />
          </span>
          <span className="flex h-12 items-center rounded-full bg-white px-4 shadow-[0_2px_14px_rgba(0,0,0,0.2)] sm:h-14 sm:px-5">
            <Image
              src="/trust/eurofins.png"
              alt={t.eurofinsAlt}
              width={162}
              height={32}
              className="h-7 w-auto sm:h-8"
            />
          </span>
        </div>
      </div>
    </section>
  )
}
