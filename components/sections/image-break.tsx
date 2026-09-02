import Image from "next/image"
import type { Lang } from "@/lib/i18n"
import { COPY } from "./image-break.copy"

export function ImageBreak({ lang }: { lang: Lang }) {
  const t = COPY[lang]
  return (
    <section className="relative flex min-h-[85svh] items-end overflow-hidden bg-ink" aria-label={t.sectionLabel}>
      <Image
        src="/lifestyle/stadium-man.jpg"
        alt={t.imageAlt}
        fill
        className="object-cover object-[50%_45%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" aria-hidden />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 md:px-8 md:pb-16">
        <p className="max-w-xl font-fraunces text-3xl leading-tight text-ink-foreground text-balance md:text-5xl">
          {t.heading}
        </p>
      </div>
    </section>
  )
}
