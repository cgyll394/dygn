import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { PaymentBadges } from "@/components/payment-badges"

export function Hero() {
  return (
    <section className="-mt-20 border-b border-border bg-ink md:-mt-24">
      <div className="grid md:min-h-[92svh] md:grid-cols-[1fr_1.05fr]">
        {/* Bilden står fri, utan text över, så förpackningen går att läsa */}
        <div className="relative order-1 min-h-[56svh] overflow-hidden md:order-2 md:min-h-0">
          <Image
            src="/lifestyle/runclub-bottle.jpg"
            alt="Löpare håller upp en DYGN-sachet och vattenflaska efter ett pass"
            fill
            priority
            className="object-cover object-[46%_22%]"
            sizes="(min-width: 768px) 52vw, 100vw"
          />
        </div>

        <div className="order-2 flex flex-col justify-center px-5 pb-12 pt-10 md:order-1 md:px-10 md:pb-16 md:pt-32 lg:px-14">
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-foreground/80">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
            Tillverkad i Sverige
          </p>
          <h1 className="mt-5 font-fraunces text-[2.6rem] leading-[1.04] text-ink-foreground text-balance sm:text-5xl lg:text-6xl">
            Grunden kroppen behöver. Varje dygn.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-foreground/85 md:text-lg">
            En sachet, åtta näringsämnen. Klart på 30 sekunder.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
            <PaymentBadges only={["klarna", "applepay"]} tone="dark" />
            <span className="text-xs text-ink-foreground/75">
              Betala senare med Klarna eller prenumerera med Apple Pay
            </span>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="#kop"
              className="inline-flex min-h-[50px] items-center rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
            >
              Förbeställ DYGN
            </Link>
            <Link
              href="/formulering"
              className="hidden min-h-[50px] items-center rounded-full border border-ink-foreground/40 px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-ink-foreground transition-colors hover:bg-ink-foreground/10 sm:inline-flex"
            >
              Formuleringen
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-1.5" aria-label="5 av 5 i betyg från tidiga testare">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" aria-hidden />
              ))}
              <span className="ml-1 text-xs text-ink-foreground/75">Från våra första 200 testare</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
