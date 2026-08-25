import Image from "next/image"
import Link from "next/link"

export function V2Hero() {
  return (
    <section className="relative min-h-svh overflow-hidden bg-[#c5b6b5]">
      {/* Mobil: fotot i fullskärm */}
      <div className="absolute inset-0 md:hidden" aria-hidden>
        <Image
          src="/product/dygn-box-balance.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[50%_22%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/10 to-ink/55" />
      </div>

      {/* Desktop: fotot helt i högra halvan */}
      <div className="absolute inset-y-0 right-0 hidden w-1/2 md:block" aria-hidden>
        <Image
          src="/product/dygn-box-balance.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[50%_30%]"
          sizes="50vw"
        />
      </div>
      <div className="absolute inset-y-0 left-0 hidden w-1/2 bg-background md:block" aria-hidden />

      <div className="relative z-10 flex min-h-svh flex-col items-center justify-end gap-4 px-6 pb-14 pt-40 text-center md:w-1/2 md:items-start md:justify-center md:gap-5 md:px-12 md:pb-16 md:text-left lg:px-20">
        <h1 className="max-w-md font-fraunces text-3xl leading-[1.08] text-ink-foreground text-balance sm:text-4xl md:text-ink lg:text-5xl">
          {"Grunden kroppen behöver. Varje dygn"}
          <span className="text-primary">.</span>
        </h1>
        <p className="text-sm leading-relaxed text-ink-foreground/90 md:text-base md:text-ink/65">
          En sachet om dagen. Åtta näringsämnen.
        </p>
        <div className="mt-2 flex items-center gap-5">
          <Link
            href="/produkt"
            className="rounded-full bg-primary px-7 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-ink hover:text-ink-foreground"
          >
            Förbeställ
          </Link>
          <Link
            href="/formulering"
            className="text-xs font-medium uppercase tracking-[0.14em] text-ink-foreground/80 underline underline-offset-4 transition-opacity hover:opacity-70 md:text-ink/60"
          >
            Formuleringen
          </Link>
        </div>
      </div>
    </section>
  )
}
