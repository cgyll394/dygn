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
          Hos en HACCP-certifierad svensk tillverkare som följer GMP. Varje produktion tredjepartstestas av Eurofins för tungmetaller och mikrobiologisk säkerhet.
        </p>
        <Link
          href="/formulering"
          className="mt-8 inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-ink-foreground underline decoration-ink-foreground/40 underline-offset-[6px] transition-colors hover:decoration-ink-foreground"
        >
          Läs om formuleringen
        </Link>

        {/* Förtroende-seals — endast v2 (.v2-trust styr display via CSS) */}
        <div className="v2-trust mx-auto mt-12 max-w-md gap-5 border-t border-ink-foreground/15 pt-9">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-2 shadow-[0_2px_14px_rgba(0,0,0,0.18)] sm:h-14 sm:w-14 sm:p-2.5">
              <Image
                src="/trust/haccp.svg"
                alt="HACCP-certifierad tillverkning"
                width={44}
                height={44}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="flex h-12 items-center rounded-full bg-white px-4 shadow-[0_2px_14px_rgba(0,0,0,0.18)] sm:h-14 sm:px-5">
              <Image
                src="/trust/eurofins.png"
                alt="Tredjepartstestad av Eurofins"
                width={162}
                height={32}
                className="h-7 w-auto sm:h-8"
              />
            </span>
          </div>
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-foreground/55">
            {"GMP · Tillverkad av 13:E Protein Import, Sverige"}
          </p>
        </div>
      </div>
    </section>
  )
}
