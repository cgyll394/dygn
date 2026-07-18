import Image from "next/image"
import Link from "next/link"

export function ClosingCta() {
  return (
    <section className="relative flex min-h-[70svh] items-center justify-center overflow-hidden bg-ink">
      <Image
        src="/lifestyle/stockholm-winter.jpg"
        alt="Löpare med en DYGN-sachet vid vattnet i Stockholm en vintermorgon"
        fill
        className="object-cover object-[65%_30%] opacity-80 md:object-[50%_55%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/20" aria-hidden />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-5 py-24 text-center md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-ink-foreground/75">
          Formulerad i Sverige
        </p>
        <h2 className="mt-5 font-fraunces text-4xl leading-tight text-ink-foreground text-balance md:text-6xl">
          Allt kroppen behöver. Varje dygn.
        </h2>
        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/produkt"
            className="inline-flex min-h-[50px] items-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
          >
            Förbeställ DYGN
          </Link>
          <p className="text-sm text-ink-foreground/80">{"Från 10 kr per dag · 30 dagars öppet köp"}</p>
        </div>
      </div>
    </section>
  )
}
