import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { PaymentBadges } from "@/components/payment-badges"

export function Hero() {
  return (
    <section className="-mt-20 bg-ink md:-mt-24">
      {/* Del 1: stor bild med enbart rubriken högt upp, så sacheten inte skyms */}
      <div className="relative flex min-h-[86svh] items-start overflow-hidden">
        <Image
          src="/lifestyle/runclub-bottle.jpg"
          alt="Löpare håller upp en DYGN-sachet och vattenflaska efter ett pass"
          fill
          priority
          className="object-cover object-[46%_26%]"
          sizes="100vw"
        />
        <div className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-ink/80 via-ink/40 to-transparent" aria-hidden />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 md:px-8 md:pt-32">
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-foreground/85">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
            Tillverkad i Sverige
          </p>
          <h1 className="mt-4 max-w-md font-fraunces text-[2.6rem] leading-[1.04] text-ink-foreground text-balance sm:text-5xl md:max-w-xl md:text-6xl">
            Grunden kroppen behöver. Varje dygn.
          </h1>
        </div>
      </div>

      {/* Del 2: allt annat i en egen rad under bilden */}
      <div className="border-t border-ink-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-7 md:flex-row md:items-center md:justify-between md:gap-10 md:px-8 md:py-8">
          <div>
            <p className="text-base leading-relaxed text-ink-foreground/85 md:text-lg">
              En sachet, åtta näringsämnen. Klart på 30 sekunder.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
              <PaymentBadges only={["klarna", "applepay"]} tone="dark" />
              <span className="text-xs text-ink-foreground/75">
                Betala senare med Klarna eller prenumerera med Apple Pay
              </span>
            </div>
          </div>

          <div className="flex shrink-0 flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#kop"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
            >
              Förbeställ DYGN
            </Link>
            <span
              className="flex items-center gap-1.5"
              aria-label="5 av 5 i betyg från våra första 200 testare"
            >
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
