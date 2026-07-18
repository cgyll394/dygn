"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus } from "lucide-react"

const ITEMS = [
  {
    title: "Det du inte känner",
    body: "D-vitamin, K2, folat och jod arbetar långsiktigt och syns i blodprov, inte i hur dagen känns. Ligger du redan bra till känner du ingenting. Så ska det vara.",
  },
  {
    title: "Det du kan märka",
    body: "Magnesium kan ge bättre sömn efter några veckor om du ligger lågt. B12 kan lyfta energin vid brist, vanligt vid växtbaserad kost. Mer än så lovar vi inte.",
  },
  {
    title: "Så ser du att det verkar",
    body: "Ta blodprov före och efter tre månader, till exempel D-vitamin och homocystein. Det är så vi själva utvärderar formuleringen.",
  },
]

export function Honesty() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative overflow-hidden bg-ink" aria-labelledby="honesty-heading">
      <Image
        src="/lifestyle/pool.jpg"
        alt=""
        aria-hidden
        fill
        className="object-cover object-[50%_35%] opacity-50"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink/70" aria-hidden />
      <div className="relative z-10 mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-foreground/70">
          Ärligt talat
        </p>
        <h2
          id="honesty-heading"
          className="mx-auto mt-4 max-w-2xl text-center font-fraunces text-3xl leading-tight text-ink-foreground text-balance md:text-5xl"
        >
          Du kommer förmodligen inte känna något. Det är meningen.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-center text-sm leading-relaxed text-ink-foreground/80">
          Grundnäring ska inte kännas. Den ska synas: i blodprov och i brister som aldrig uppstår.
        </p>

        <ul className="mt-10 overflow-hidden rounded-xl border border-ink-foreground/15 bg-ink/40 backdrop-blur-md md:mt-12">
          {ITEMS.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <li key={item.title} className={index > 0 ? "border-t border-ink-foreground/15" : ""}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex min-h-[52px] w-full items-center justify-between gap-4 px-5 py-4 text-left text-ink-foreground transition-opacity hover:opacity-80 md:px-7"
                >
                  <span className="flex items-center gap-4">
                    <span
                      aria-hidden
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink-foreground/40 text-xs font-semibold"
                    >
                      {index + 1}
                    </span>
                    <span className="text-base font-medium md:text-lg">{item.title}</span>
                  </span>
                  <Plus
                    aria-hidden
                    className={`h-4 w-4 shrink-0 text-ink-foreground/60 transition-transform ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-6 pl-16 text-sm leading-relaxed text-ink-foreground/85 md:px-7 md:pl-[4.5rem]">
                    {item.body}
                  </p>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
