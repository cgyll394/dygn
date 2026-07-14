import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-ink">
      <Image
        src="/lifestyle/hero-track.jpeg"
        alt="Löpare på löparbana som håller en DYGN-sachet"
        fill
        priority
        className="object-cover object-[center_30%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-ink/20" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
        <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.22em] text-ink-foreground/70">
          Daily Nutrition — formulerad i Sverige
        </p>
        <h1 className="type-display max-w-4xl text-ink-foreground">
          Allt kroppen behöver. <em className="italic">Varje dygn.</em>
        </h1>
        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
          <Link
            href="#kop"
            className="btn h-13 bg-primary px-9 py-4 text-primary-foreground hover:bg-ink-foreground hover:text-ink"
          >
            Förbeställ DYGN
          </Link>
          <Link
            href="#formula"
            className="text-sm text-ink-foreground/80 underline decoration-ink-foreground/40 underline-offset-[6px] transition-colors duration-300 hover:text-ink-foreground hover:decoration-ink-foreground"
          >
            Se formuleringen
          </Link>
        </div>
        <p className="mt-12 max-w-md border-t border-ink-foreground/20 pt-5 text-sm leading-relaxed text-ink-foreground/70">
          Åtta näringsämnen i de former och doser forskningen pekar på. En sachet om dagen. Inget annat.
        </p>
      </div>
    </section>
  )
}
