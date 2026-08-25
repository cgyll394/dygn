import { FlaskConical, Lock, RotateCcw, Truck } from "lucide-react"
import { DayDotsRow } from "@/components/day-dots-row"
import { NewsletterForm } from "@/components/newsletter-form"
import { PaymentBadges } from "@/components/payment-badges"

const ASSURANCES = [
  { icon: RotateCcw, text: "30 dagars öppet köp" },
  { icon: Truck, text: "Fri frakt med prenumeration" },
  { icon: FlaskConical, text: "Tredjepartstestad av Eurofins" },
  { icon: Lock, text: "Säker betalning" },
]

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8 md:py-16">
        <div className="max-w-md">
          <h2 className="font-serif text-2xl text-balance md:text-3xl">Anmäl dig till lanseringslistan</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-foreground/70">
            Få exklusiva erbjudanden och tidig tillgång till nya produkter.
          </p>
        </div>
        <NewsletterForm />
      </div>

      <div className="border-t border-ink-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-7">
            {ASSURANCES.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2 text-xs text-ink-foreground/75">
                <Icon className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
          <PaymentBadges className="shrink-0" />
        </div>
      </div>

      <div className="border-t border-ink-foreground/15">
        <DayDotsRow className="v2-dots justify-center pt-6" />
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-6 text-xs text-ink-foreground/60 md:flex-row md:px-8">
          <p>Kosttillskott ersätter inte en varierad kost. Överskrid inte rekommenderad dygnsdos.</p>
          <p>{"© 2026 DYGN"}</p>
        </div>
      </div>
    </footer>
  )
}
