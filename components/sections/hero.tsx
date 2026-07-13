import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-ink">
      <Image
        src="/lifestyle/hero-track.jpeg"
        alt="Löpare på löparbana som håller en DYGN-sachet"
        fill
        priority
        className="object-cover object-[center_30%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 md:px-8 md:pb-20">
        <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-ink-foreground/80">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
          Daily Nutrition — Formulerad i Sverige
        </p>
        <h1 className="max-w-3xl font-serif text-5xl leading-[1.02] text-ink-foreground text-balance sm:text-6xl md:text-8xl">
          Allt kroppen behöver. <em className="text-primary not-italic md:italic md:text-ink-foreground">Varje dygn.</em>
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-ink-foreground/85 md:text-lg">
          Åtta näringsämnen i de former och doser forskningen pekar på. En sachet om dagen. Inget annat.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="#kop"
            className="inline-flex items-center rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
          >
            Förbeställ DYGN
          </Link>
          <Link
            href="#ingredienser"
            className="inline-flex items-center rounded-full border border-ink-foreground/40 px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-ink-foreground transition-colors hover:bg-ink-foreground/10"
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
