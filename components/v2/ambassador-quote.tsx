import Image from "next/image"
import type { Lang } from "@/lib/i18n"
import { COPY } from "./ambassador-quote.copy"

// V2-only. DYGN:s ansikte utåt: Gunnar Lögdahl, fystränare för Eskilstuna GUIF.
// OBS: quote-texten (i ambassador-quote.copy.ts) är ETT UTKAST — ersätt med
// Gunnars egna/godkända ord innan sidan görs publik.
export function AmbassadorQuote({ lang }: { lang: Lang }) {
  const t = COPY[lang]
  return (
    <section className="bg-card py-20 md:py-28" aria-label={t.sectionLabel}>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <blockquote className="mx-auto max-w-2xl font-fraunces text-2xl leading-[1.32] text-ink text-balance md:text-[2rem]">
          {t.quote}
        </blockquote>

        <figcaption className="mt-9 flex flex-col items-center gap-3.5">
          <Image
            src="/people/gunnar.jpg"
            alt={t.imageAlt}
            width={92}
            height={92}
            className="h-[92px] w-[92px] rounded-full object-cover"
          />
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-ink">{t.name}</span>
            <span className="mt-0.5 block text-xs text-muted-foreground">{t.role}</span>
            <span className="mt-1.5 block text-[11px] font-medium uppercase tracking-[0.12em] text-primary">
              {t.merit}
            </span>
          </span>
        </figcaption>
      </div>
    </section>
  )
}
