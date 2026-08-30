import Image from "next/image"
import Link from "next/link"

// V2-only. Klinisk vit variant av kvalitetssektionen: bakgrund av
// mineralkristaller + citron, mörk text, HACCP + Eurofins-seals.
export function V2Honesty() {
  return (
    <section
      className="relative flex min-h-[85svh] items-center overflow-hidden bg-[#f4f3f0]"
      aria-labelledby="v2-honesty-heading"
    >
      <Image src="/lifestyle/clinical-bg.jpg" alt="" aria-hidden fill className="object-cover" sizes="100vw" />
      {/* Mjuk vit glöd bakom texten för läsbarhet */}
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 46% 62% at 50% 50%, rgba(244,243,240,0.92) 0%, rgba(244,243,240,0.55) 45%, rgba(244,243,240,0) 78%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-5 py-24 text-center md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/45">Kvalitet</p>
        <h2
          id="v2-honesty-heading"
          className="mx-auto mt-5 font-fraunces text-4xl leading-[1.05] text-ink text-balance sm:text-5xl md:text-7xl"
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

        {/* Certifieringar */}
        <div className="mx-auto mt-12 flex max-w-md flex-col items-center gap-5 border-t border-ink/10 pt-9">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
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
      </div>
    </section>
  )
}
