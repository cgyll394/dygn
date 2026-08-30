import Image from "next/image"
import Link from "next/link"

// V2-only. Klinisk kvalitetssektion: två bilder sida vid sida (citron +
// mineralkristaller), mörk text, HACCP + Eurofins-seals.
export function V2Honesty() {
  return (
    <section className="bg-card py-20 md:py-28" aria-labelledby="v2-honesty-heading">
      {/* Två bilder sida vid sida */}
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-5 md:gap-6 md:px-8">
        <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-border/60 bg-white">
          <Image
            src="/lifestyle/quality-lemon.jpg"
            alt="Citronskiva"
            width={800}
            height={800}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-border/60 bg-white">
          <Image
            src="/lifestyle/quality-crystals.jpg"
            alt="Mineralkristaller"
            width={900}
            height={1200}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Text */}
      <div className="mx-auto mt-14 max-w-2xl px-5 text-center md:mt-16 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/45">Kvalitet</p>
        <h2
          id="v2-honesty-heading"
          className="mx-auto mt-5 font-fraunces text-4xl leading-[1.05] text-ink text-balance sm:text-5xl md:text-6xl"
        >
          Tillverkad i Sverige. Testad av oberoende labb.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink/70">
          Hos en HACCP-certifierad svensk tillverkare som följer GMP. Varje produktion tredjepartstestas av Eurofins för
          tungmetaller och mikrobiologisk säkerhet.
        </p>
        <Link
          href="/formulering"
          className="mt-8 inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-ink underline decoration-ink/30 underline-offset-[6px] transition-colors hover:decoration-ink"
        >
          Läs om formuleringen
        </Link>

        <div className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-2.5 border-t border-ink/10 pt-9 sm:gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white p-2 shadow-[0_2px_14px_rgba(0,0,0,0.08)] sm:h-14 sm:w-14 sm:p-2.5">
            <Image
              src="/trust/haccp.svg"
              alt="HACCP-certifierad tillverkning"
              width={44}
              height={44}
              className="h-full w-full object-contain"
            />
          </span>
          <span className="flex h-12 items-center rounded-full border border-border bg-white px-4 shadow-[0_2px_14px_rgba(0,0,0,0.08)] sm:h-14 sm:px-5">
            <Image
              src="/trust/eurofins.png"
              alt="Tredjepartstestad av Eurofins"
              width={162}
              height={32}
              className="h-7 w-auto sm:h-8"
            />
          </span>
        </div>
      </div>
    </section>
  )
}
