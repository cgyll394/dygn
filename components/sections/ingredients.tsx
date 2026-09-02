"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { useLang } from "@/components/lang-provider"
import { COPY } from "./ingredients.copy"

export function Ingredients() {
  const lang = useLang()
  const t = COPY[lang]
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="formula" aria-labelledby="ingredients-heading" className="scroll-mt-20 bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">{t.eyebrow}</p>
            <h2 id="ingredients-heading" className="mt-4 font-serif text-4xl leading-tight text-balance md:text-5xl">
              {t.heading}
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-foreground/70">{t.intro}</p>
            <div className="mt-10 flex gap-10 border-t border-ink-foreground/15 pt-8">
              <div>
                <p className="font-serif text-4xl text-primary">8</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-ink-foreground/60">{t.stats.nutrients}</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-primary">0</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-ink-foreground/60">{t.stats.blends}</p>
              </div>
              <div>
                <p className="whitespace-nowrap font-serif text-4xl text-primary">{"5 g"}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-ink-foreground/60">{t.stats.perSachet}</p>
              </div>
            </div>
          </div>

          <ul className="divide-y divide-ink-foreground/15 border-y border-ink-foreground/15">
            {t.ingredients.map((ingredient, index) => {
              const isOpen = openIndex === index
              return (
                <li key={ingredient.name}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex min-h-[44px] w-full items-center justify-between gap-4 py-5 text-left transition-opacity hover:opacity-70"
                  >
                    <span className="flex flex-1 flex-col gap-1 md:flex-row md:items-baseline md:gap-6">
                      <span className="font-serif text-xl md:w-40 md:shrink-0 md:text-2xl">{ingredient.name}</span>
                      <span className="text-xs text-ink-foreground/50 md:flex-1">{ingredient.form}</span>
                      <span className="text-sm font-medium tabular-nums text-primary">{ingredient.dose}</span>
                    </span>
                    <Plus
                      aria-hidden="true"
                      className={`h-4 w-4 shrink-0 text-ink-foreground/50 transition-transform ${isOpen ? "rotate-45" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="grid gap-6 pb-8 md:grid-cols-2 md:gap-10">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-xs font-medium uppercase tracking-wide text-ink-foreground/50">
                          {t.columns.why}
                        </h3>
                        <p className="text-sm leading-relaxed text-ink-foreground/80">{ingredient.why}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-xs font-medium uppercase tracking-wide text-ink-foreground/50">
                          {t.columns.form}
                        </h3>
                        <p className="text-sm leading-relaxed text-ink-foreground/80">{ingredient.detail}</p>
                      </div>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
