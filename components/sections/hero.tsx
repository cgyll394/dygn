import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { PaymentBadges } from "@/components/payment-badges"

export function Hero() {
  return (
    <section className="relative -mt-20 flex min-h-[100svh] items-end overflow-hidden bg-ink md:-mt-24">
      <Image
        src="/lifestyle/runclub-bottle.jpg"
        alt="Löpare håller upp en DYGN-sachet och vattenflaska efter ett pass"
        fill
        priority
        className="object-cover object-[50%_20%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-ink/25" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 md:px-8 md:pb-24">
        <p className="mb-6 hidden items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-foreground/80 sm:flex">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
          Tillverkad i Sverige
        </p>
        <h1 className="max-w-3xl font-fraunces text-5xl leading-[1.02] text-ink-foreground text-balance sm:text-6xl md:text-8xl">
          Grunden kroppen behöver. Varje dygn.
        </h1>
        <p className="mt-7 max-w-md text-base leading-relaxed text-ink-foreground/85 md:mt-8 md:text-lg">
          {"En sachet, åtta näringsämnen. "}
          <br className="sm:hidden" />
          Klart på 30 sekunder.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2.5 md:mt-8">
          <PaymentBadges only={["klarna", "applepay"]} tone="dark" />
          <span className="text-xs text-ink-foreground/75">
            Betala senare med Klarna eller prenumerera med Apple Pay
          </span>
        </div>
        <div className="mt-9 flex flex-wrap items-center gap-4 md:mt-11">
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
        <div className="mt-10 hidden flex-wrap items-center gap-x-6 gap-y-2 md:flex">
          <span className="flex items-center gap-1.5" aria-label="5 av 5 i betyg från tidiga testare">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" aria-hidden />
            ))}
            <span className="ml-1 text-xs text-ink-foreground/75">Från våra första 200 testare</span>
          </span>
        </div>
      </div>
    </section>
  )
}
