import Image from "next/image"
import Link from "next/link"
import { Reveal } from "@/components/reveal"

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="grid min-h-[88svh] md:grid-cols-[1.05fr_1fr]">
        {/* Copy panel */}
        <div className="order-2 flex flex-col justify-end px-5 pb-12 pt-14 md:order-1 md:px-10 md:pb-16 md:pt-24 lg:px-14">
          <Reveal>
            <p className="type-eyebrow">Daily Nutrition — formulerad i Sverige</p>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="type-display mt-6 max-w-2xl">
              Allt kroppen behöver. Varje dygn.
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="type-lede mt-7 max-w-md">
              Åtta näringsämnen i de former och doser forskningen pekar på. En sachet om dagen, löst i ett glas
              vatten. Inget annat.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-10 flex flex-wrap items-center gap-x-9 gap-y-5">
              <Link
                href="#kop"
                className="btn h-13 bg-primary px-8 py-4 text-primary-foreground hover:bg-foreground hover:text-background"
              >
                Förbeställ DYGN
                <span className="btn-arrow" aria-hidden>
                  →
                </span>
              </Link>
              <Link href="#formula" className="u-link text-sm text-foreground">
                Se formuleringen
              </Link>
            </div>
          </Reveal>
          <Reveal delay={340}>
            <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
              <div>
                <dd className="font-serif text-2xl">8</dd>
                <dt className="mt-1 text-[11px] uppercase tracking-[0.12em] text-muted-foreground">Näringsämnen</dt>
              </div>
              <div>
                <dd className="font-serif text-2xl">1</dd>
                <dt className="mt-1 text-[11px] uppercase tracking-[0.12em] text-muted-foreground">Sachet om dagen</dt>
              </div>
              <div>
                <dd className="whitespace-nowrap font-serif text-2xl">{"4,6 g"}</dd>
                <dt className="mt-1 text-[11px] uppercase tracking-[0.12em] text-muted-foreground">Per dos</dt>
              </div>
            </dl>
          </Reveal>
        </div>

        {/* Image panel */}
        <div className="relative order-1 min-h-[52svh] overflow-hidden bg-ink md:order-2 md:min-h-0">
          <Image
            src="/lifestyle/runclub.jpg"
            alt="Löpare håller upp en DYGN-sachet framför sin löpargrupp"
            fill
            priority
            className="object-cover object-[42%_18%]"
            sizes="(min-width: 768px) 48vw, 100vw"
          />
        </div>
      </div>
    </section>
  )
}
