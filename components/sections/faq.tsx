"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

const FAQS = [
  {
    q: "Hur tar jag DYGN?",
    a: "En sachet om dagen, upplöst i ett glas kallt vatten (cirka 200 ml). Ta den när det passar dig — de flesta väljer morgonen för att bygga vanan. Smaken är mild citrus, utan tillsatt socker.",
  },
  {
    q: "Varför bara åtta näringsämnen?",
    a: "För att fler inte är bättre. Vi har valt näringsämnen där tre kriterier möts: tydlig vetenskaplig evidens, dokumenterat vanliga brister i nordisk kost, och bioaktiva former med gott upptag. Ett multivitamin med 25 ingredienser i verkningslösa doser ser bra ut på etiketten men gör ingen skillnad i kroppen.",
  },
  {
    q: "Kan jag ta DYGN tillsammans med andra kosttillskott eller läkemedel?",
    a: "DYGN innehåller måttfulla doser som är utformade för att komplettera en normal kost. Tar du blodförtunnande läkemedel (särskilt warfarin) bör du prata med din läkare på grund av K2-innehållet. Detsamma gäller vid sköldkörtelmedicinering på grund av jod.",
  },
  {
    q: "Är DYGN veganskt?",
    a: "Ja. Vitamin D3 kommer från lav (Vitashine) i stället för lanolin, och samtliga övriga ingredienser är växtbaserade eller syntetiskt framställda utan animaliska källor.",
  },
  {
    q: "Vilken returpolicy gäller?",
    a: "30 dagars öppet köp — även på öppnade förpackningar. Är du inte nöjd mejlar du oss så återbetalar vi hela beloppet. Vi tror på produkten och tar hellre risken än att du ska behöva ta den.",
  },
  {
    q: "Hur fungerar prenumerationen?",
    a: "En ny förpackning levereras var 30:e dag till 20 % lägre pris. Du kan pausa, hoppa över en leverans eller avsluta när som helst — utan bindningstid, direkt från ditt konto eller via mejl.",
  },
  {
    q: "Var tillverkas DYGN?",
    a: "DYGN tillverkas i EU i en GMP-certifierad anläggning. Varje batch tredjepartstestas för tungmetaller, mikrobiologi och att innehållet stämmer med etiketten. Analyscertifikat finns tillgängliga på förfrågan.",
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[1fr_2fr] md:gap-20 md:px-8 md:py-28">
        <div>
          <p className="type-eyebrow">Frågor</p>
          <h2 id="faq-heading" className="type-title mt-5">
            {"Vanliga frågor"}
          </h2>
          <p className="type-lede mt-5 max-w-xs">
            {"Hittar du inte svaret? Mejla oss på "}
            <a href="mailto:hej@dygn.se" className="text-foreground underline underline-offset-4 decoration-border transition-colors duration-300 hover:decoration-foreground">
              hej@dygn.se
            </a>
            {"."}
          </p>
        </div>
        <ul className="divide-y divide-border border-y border-border">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <li key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left transition-opacity duration-300 hover:opacity-60"
                >
                  <span className="text-[15px] font-medium leading-snug">{faq.q}</span>
                  <Plus
                    aria-hidden="true"
                    className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ease-out ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
                {isOpen && <p className="max-w-2xl pb-6 text-sm leading-[1.7] text-muted-foreground">{faq.a}</p>}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
