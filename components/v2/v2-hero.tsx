import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { PaymentBadges } from "@/components/payment-badges"

// V2-heron: fullskärm på båda brytpunkterna. Desktop delar i copy-spalt
// och obeskuret foto; vänsterspalten är grupperad i tre nivåer med
// tydlig hierarki: påstående, en handling, och trust som en tunn rad
// längst ner. Mobil: fotot fritt, litet kluster under asken.
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
              className="rounded-full bg-primary px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
            >
              Förbeställ DYGN
            </Link>
            <Link
              href="/formulering"
              className="text-[10px] font-medium uppercase tracking-[0.14em] text-ink-foreground/80 underline underline-offset-4"
            >
              Formuleringen
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop: den utökade bilden i fullbredd, copy över tomma ytan */}
      <div className="relative hidden md:block">
        <Image
          src="/product/dygn-box-balance-wide.jpg"
          alt="DYGN-ask balanserar på ett finger"
          fill
          priority
          className="scale-[1.06] object-cover object-[50%_22%] -translate-x-[1.2%] translate-y-[1%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/30 via-ink/10 to-transparent" aria-hidden />
        <div className="relative z-10 flex min-h-[100svh] w-1/2 flex-col justify-center px-12 pb-28 pt-32 lg:px-20">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink-foreground/70">
            Tillverkad i Sverige
          </p>
          <h1 className="mt-6 max-w-xl font-fraunces text-5xl leading-[1.05] text-ink-foreground text-balance lg:text-6xl">
            Grunden kroppen behöver. Varje dygn.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-foreground/80">
            En sachet, åtta näringsämnen. Klart på 30 sekunder.
          </p>
          <div className="mt-9 flex items-center gap-6">
            <Link
              href="#kop"
              className="inline-flex min-h-[40px] items-center rounded-full bg-primary px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
            >
              Förbeställ DYGN
            </Link>
            <Link
              href="/formulering"
              className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-foreground/75 underline underline-offset-4 transition-colors hover:text-ink-foreground"
            >
              Formuleringen
            </Link>
          </div>

          {/* Trust: en tunn rad längst ner, ur vägen för budskapet */}
          <div className="absolute bottom-10 left-12 right-6 flex items-center justify-between border-t border-ink-foreground/20 pt-5 lg:left-20">
            <span className="flex items-center gap-1.5" aria-label="5 av 5 i betyg från tidiga testare">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-primary text-primary" aria-hidden />
              ))}
              <span className="ml-1.5 text-[11px] text-ink-foreground/70">Från våra första 200 testare</span>
            </span>
            <PaymentBadges only={["klarna", "applepay"]} />
          </div>
        </div>
      </div>
    </section>
  )
}
