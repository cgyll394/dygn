import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { PaymentBadges } from "@/components/payment-badges"

// V2-heron följer väntelistans komposition: fotot får vara helt,
// texten ligger där bilden är lugn. Mobil: fullskärmsfoto med litet
// kluster under asken. Desktop: copy på grått till vänster, hela
// fotot till höger.
export function V2Hero() {
  return (
    <section className="relative -mt-20 overflow-hidden bg-[#c5b6b5] md:-mt-24">
      {/* Mobil */}
      <div className="relative flex min-h-[100svh] flex-col justify-end md:hidden">
        <Image
          src="/product/dygn-box-balance.jpg"
          alt="DYGN-ask balanserar på ett finger"
          fill
          priority
          className="object-cover object-[50%_20%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/10 to-ink/55" aria-hidden />
        <div className="relative z-10 flex flex-col items-center gap-3 px-6 pb-11 text-center">
          <h1 className="font-fraunces text-[1.9rem] leading-[1.1] text-ink-foreground text-balance">
            Grunden kroppen behöver. Varje dygn.
          </h1>
          <p className="text-[13px] leading-relaxed text-ink-foreground/85">
            En sachet om dagen. Åtta näringsämnen.
          </p>
          <div className="mt-2 flex items-center gap-4">
            <Link
              href="#kop"
              className="rounded-full bg-primary px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
            >
              Förbeställ DYGN
            </Link>
            <Link
              href="/formulering"
              className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-foreground/80 underline underline-offset-4"
            >
              Formuleringen
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:grid md:min-h-[92svh] md:grid-cols-2">
        <div className="flex flex-col justify-center bg-background px-12 pb-16 pt-32 lg:px-20">
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink/55">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
            Tillverkad i Sverige
          </p>
          <h1 className="mt-5 max-w-xl font-fraunces text-5xl leading-[1.05] text-ink text-balance lg:text-6xl">
            Grunden kroppen behöver. Varje dygn.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/65">
            En sachet, åtta näringsämnen. Klart på 30 sekunder.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
            <PaymentBadges only={["klarna", "applepay"]} />
            <span className="text-xs text-ink/55">Betala senare med Klarna eller prenumerera med Apple Pay</span>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#kop"
              className="inline-flex min-h-[44px] items-center rounded-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-primary-foreground transition-colors hover:bg-ink hover:text-ink-foreground"
            >
              Förbeställ DYGN
            </Link>
            <Link
              href="/formulering"
              className="inline-flex min-h-[44px] items-center rounded-full border border-ink/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-ink hover:text-ink-foreground"
            >
              Formuleringen
            </Link>
          </div>
          <div className="mt-7 flex items-center gap-1.5" aria-label="5 av 5 i betyg från tidiga testare">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" aria-hidden />
            ))}
            <span className="ml-1 text-xs text-ink/55">Från våra första 200 testare</span>
          </div>
        </div>
        <div className="relative" aria-hidden>
          <Image
            src="/product/dygn-box-balance.jpg"
            alt=""
            fill
            priority
            className="object-cover object-[50%_30%]"
            sizes="50vw"
          />
        </div>
      </div>
    </section>
  )
}
