import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

export function Hero() {
  return (
    <section className="relative -mt-16 flex min-h-[92svh] items-end overflow-hidden bg-ink md:-mt-[76px]">
      <Image
        src="/lifestyle/hero-fisheye.jpg"
        alt="Löpare håller upp en DYGN-sachet framför sin löpargrupp på en löparbana"
        fill
        priority
        className="object-cover object-[50%_22%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-ink/30" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 md:px-8 md:pb-20">
        <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-foreground/80">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
          Daily Nutrition — Formulerad i Sverige
        </p>
        <h1 className="max-w-3xl font-serif text-5xl leading-[1.02] text-ink-foreground text-balance sm:text-6xl md:text-8xl">
          Allt kroppen behöver. Varje dygn.
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-ink-foreground/85 md:text-lg">
          Åtta näringsämnen i rätt form och rätt dos — förklarat, dokumenterat och tredjepartstestat. En sachet om
          dagen. Inget annat.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="#kop"
            className="inline-flex min-h-[50px] items-center rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
          >
            Förbeställ DYGN
          </Link>
          <Link
            href="#formula"
            className="inline-flex min-h-[50px] items-center rounded-full border border-ink-foreground/40 px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-ink-foreground transition-colors hover:bg-ink-foreground/10"
          >
            Formuleringen
          </Link>
        </div>
        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2">
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
