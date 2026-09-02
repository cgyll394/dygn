import { FlaskConical, Lock, RotateCcw, Truck } from "lucide-react"
import { DayDotsRow } from "@/components/day-dots-row"
import { LangSwitch } from "@/components/lang-switch"
import { NewsletterForm } from "@/components/newsletter-form"
import { PaymentBadges } from "@/components/payment-badges"
import type { Lang } from "@/lib/i18n"
import { COPY } from "./site-footer.copy"

const ICONS = [RotateCcw, Truck, FlaskConical, Lock]

export function SiteFooter({ lang }: { lang: Lang }) {
  const t = COPY[lang]

  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8 md:py-16">
        <div className="max-w-md">
          <h2 className="font-serif text-2xl text-balance md:text-3xl">{t.heading}</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-foreground/70">{t.text}</p>
        </div>
        <NewsletterForm />
      </div>

      <div className="border-t border-ink-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-7">
            {t.assurances.map((text, i) => {
              const Icon = ICONS[i]
              return (
                <li key={text} className="flex items-center gap-2 text-xs text-ink-foreground/75">
                  <Icon className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                  {text}
                </li>
              )
            })}
          </ul>
          <PaymentBadges className="shrink-0" lang={lang} />
        </div>
      </div>

      <div className="border-t border-ink-foreground/15">
        <DayDotsRow className="v2-dots mx-auto max-w-6xl px-5 pt-6 md:px-8" />
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-6 text-xs text-ink-foreground/60 md:flex-row md:px-8">
          <p>{t.disclaimer}</p>
          <p className="flex items-center gap-4 whitespace-nowrap">
            <LangSwitch variant="long" className="underline underline-offset-4 transition-colors hover:text-ink-foreground" />
            <span>{t.copyright}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
