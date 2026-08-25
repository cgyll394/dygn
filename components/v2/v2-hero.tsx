import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { PaymentBadges } from "@/components/payment-badges"

// V2-varianten av startsidans hero: balansbilden i stället för runclub-fotot,
// ljusare gradient (fotot är ljust) och mindre knappar. Struktur och copy
// följer components/sections/hero.tsx.
export function V2Hero() {
  return (
    <section className="relative -mt-20 flex min-h-[100svh] items-end overflow-hidden bg-[#c5b6b5] md:-mt-24">
      <Image
        src="/product/dygn-box-balance.jpg"
        alt="DYGN-ask balanserar på ett finger"
        fill
        priority
        className="object-cover object-[50%_24%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-transparent" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-10 md:px-8 md:pb-14">
        <p className="mb-4 hidden items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-foreground/80 sm:flex">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
          Tillverkad i Sverige
        </p>
        <h1 className="max-w-2xl font-fraunces text-[2.5rem] leading-[1.04] text-ink-foreground text-balance sm:text-5xl md:max-w-3xl md:text-6xl">
          Grunden kroppen behöver. Varje dygn.
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-foreground/85 md:text-base">
          {"En sachet, åtta näringsämnen. "}
          <br className="sm:hidden" />
          Klart på 30 sekunder.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
          <PaymentBadges only={["klarna", "applepay"]} tone="dark" />
          <span className="text-xs text-ink-foreground/75">
            Betala senare med Klarna eller prenumerera med Apple Pay
          </span>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href="#kop"
            className="inline-flex min-h-[44px] items-center rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-primary-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
          >
            Förbeställ DYGN
          </Link>
          <Link
            href="/formulering"
            className="hidden min-h-[44px] items-center rounded-full border border-ink-foreground/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-ink-foreground transition-colors hover:bg-ink-foreground/10 sm:inline-flex"
          >
            Formuleringen
          </Link>
        </div>
        <div className="mt-5 hidden flex-wrap items-center gap-x-6 gap-y-2 md:flex">
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
