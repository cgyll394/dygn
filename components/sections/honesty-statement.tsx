import Image from "next/image"
import Link from "next/link"

export function HonestyStatement() {
  return (
    <section className="relative flex min-h-[85svh] items-center overflow-hidden bg-ink" aria-labelledby="honesty-statement-heading">
      <Image
        src="/lifestyle/pool.jpg"
        alt="DYGN-sachet under vattenytan i solljus"
        fill
        className="object-cover object-[50%_35%] opacity-60"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/60" aria-hidden />
      <div className="relative z-10 mx-auto max-w-4xl px-5 py-24 text-center md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-foreground/70">Kvalitet</p>
        <h2
          id="honesty-statement-heading"
          className="mx-auto mt-5 font-fraunces text-4xl leading-[1.05] text-ink-foreground text-balance sm:text-5xl md:text-7xl"
        >
          Tillverkad i Sverige. Testad av oberoende labb.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink-foreground/85">
          Hos en HACCP-certifierad och IP Livsmedel-godkänd svensk tillverkare. Varje produktion testas av Eurofins för tungmetaller och mikrobiologisk säkerhet.
        </p>
        <Link
          href="/formulering"
          className="mt-8 inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-ink-foreground underline decoration-ink-foreground/40 underline-offset-[6px] transition-colors hover:decoration-ink-foreground"
        >
          Läs om formuleringen
        </Link>
      </div>
    </section>
  )
}
