import Image from "next/image"
import Link from "next/link"
import { Reveal } from "@/components/reveal"

const ROWS = [
  { label: "Efter passet", text: "Kalium och magnesium för normal muskel- och vätskebalans." },
  { label: "På resan", text: "Ingen burk i väskan. En sachet väger 4,6 gram och tål allt." },
  { label: "Varje morgon", text: "En vana som tar tio sekunder — sedan är det klart." },
]

export function Movement() {
  return (
    <section className="bg-primary text-primary-foreground" aria-labelledby="movement-heading">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-20 md:px-8 md:py-28">
        <div>
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary-foreground/70">
              I rörelse
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h2 id="movement-heading" className="type-title mt-5">
              Gjord för dagar som inte står stilla.
            </h2>
          </Reveal>
          <Reveal delay={170}>
            <p className="mt-6 max-w-md text-[19px] font-medium leading-[1.55]">
              Träningen, jobbet, resan. DYGN är formatet som följer med — och formuleringen som täcker det
              grundläggande, oavsett hur dagen ser ut.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <ul className="mt-10 border-t border-primary-foreground/25">
              {ROWS.map((row) => (
                <li
                  key={row.label}
                  className="grid gap-1 border-b border-primary-foreground/25 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6"
                >
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-primary-foreground/70 sm:pt-1">
                    {row.label}
                  </p>
                  <p className="text-[17px] font-medium leading-snug">{row.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={330}>
            <Link
              href="/produkt"
              className="btn mt-10 h-12 border border-primary-foreground/40 px-7 text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Förbeställ DYGN
              <span className="btn-arrow" aria-hidden>
                →
              </span>
            </Link>
          </Reveal>
        </div>
        <Reveal delay={150} className="md:justify-self-end">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden bg-ink/20">
            <Image
              src="/lifestyle/runclub-bottle.jpg"
              alt="Löpare med DYGN-sachet och vattenflaska efter ett pass"
              fill
              className="object-cover object-[50%_30%]"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
