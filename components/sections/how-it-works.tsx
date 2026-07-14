import Image from "next/image"
import { Reveal } from "@/components/reveal"

const STEPS = [
  {
    number: "01",
    title: "Riv upp",
    text: "En sachet, 4,6 gram. Ta den med till jobbet, träningen eller resan. Ingen burk, ingen dosett.",
  },
  {
    number: "02",
    title: "Rör ut i vatten",
    text: "Löses i ett glas kallt vatten på under 30 sekunder. Mild citrus, utan tillsatt socker.",
  },
  {
    number: "03",
    title: "Klart för dagen",
    text: "Åtta näringsämnen i former som kroppen tar upp. Sedan behöver du inte tänka på det mer.",
  },
]

export function HowItWorks() {
  return (
    <section className="border-b border-border" aria-labelledby="how-heading">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <Image
                src="/lifestyle/feet-up.jpg"
                alt="Person som vilar med fötterna uppåt och håller ett glas"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="type-eyebrow">Så fungerar det</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 id="how-heading" className="type-title mt-5">
                En sak att göra. Inte sju.
              </h2>
            </Reveal>
            <ol className="mt-12 border-t border-border">
              {STEPS.map((step, index) => (
                <li key={step.number} className="border-b border-border">
                  <Reveal delay={140 + index * 90}>
                    <div className="flex gap-8 py-7">
                      <span
                        className="text-[11px] font-medium tabular-nums tracking-[0.14em] text-muted-foreground"
                        aria-hidden
                      >
                        {step.number}
                      </span>
                      <div className="flex flex-1 flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-8">
                        <h3 className="type-subtitle sm:w-44 sm:shrink-0">{step.title}</h3>
                        <p className="text-sm leading-[1.7] text-muted-foreground">{step.text}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
