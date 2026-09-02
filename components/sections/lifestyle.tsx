import Image from "next/image"
import Link from "next/link"
import type { Lang } from "@/lib/i18n"
import { COPY } from "./lifestyle.copy"

export function Philosophy({ lang }: { lang: Lang }) {
  const t = COPY[lang].philosophy

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-ink">
      <Image
        src="/lifestyle/cyclist.jpg"
        alt={t.imageAlt}
        fill
        className="object-cover object-[45%_18%] opacity-70"
        sizes="100vw"
      />
      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="font-serif text-3xl leading-snug text-ink-foreground text-balance md:text-5xl">{t.quote}</p>
      </div>
    </section>
  )
}

export function LifestyleGrid({ lang }: { lang: Lang }) {
  const t = COPY[lang].grid

  return (
    <section className="grid md:grid-cols-3" aria-label={t.ariaLabel}>
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src="/lifestyle/mountain.jpeg"
          alt={t.mountainAlt}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      </div>
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src="/lifestyle/runners-dusk.jpg"
          alt={t.runnersAlt}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      </div>
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src="/lifestyle/window.jpg"
          alt={t.windowAlt}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
        <div className="absolute inset-0 bg-primary/60" aria-hidden />
        <div className="absolute inset-0 flex flex-col items-start justify-between p-6 md:p-8">
          <p className="font-serif text-2xl leading-snug text-primary-foreground text-balance md:text-3xl">
            {t.quote}
          </p>
          <Link
            href="#kop"
            className="border border-primary-foreground/60 px-5 py-2.5 text-sm text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
