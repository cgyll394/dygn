"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useLang } from "@/components/lang-provider"
import { COPY } from "./faq.copy"

/** FAQPage-schema (JSON-LD) för valt språk */
function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  }
}

export function Faq() {
  const lang = useLang()
  const t = COPY[lang]
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(t.items)) }}
      />
      <div className="mx-auto max-w-4xl px-4 py-20 md:px-8 md:py-28">
        <h2 id="faq-heading" className="mb-10 font-serif text-3xl md:mb-14 md:text-4xl">
          {t.heading}
        </h2>
        <ul className="divide-y divide-border border-y border-border">
          {t.items.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <li key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left transition-opacity hover:opacity-70"
                >
                  <span className="font-medium">{faq.q}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && <p className="pb-6 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
