"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const FAQS = [
  {
    q: "Hur tar jag DYGN?",
    a: "En sachet om dagen, upplöst i ett glas kallt vatten (cirka 200 ml). Ta den när det passar dig. De flesta väljer morgonen för att bygga vanan. Smaken är mild citrus, utan tillsatt socker.",
  },
  {
    q: "Varför bara åtta näringsämnen?",
    a: "För att fler inte är bättre. Vi har valt näringsämnen där tre kriterier möts: tydlig vetenskaplig evidens, dokumenterat vanliga brister i nordisk kost, och former med dokumenterat upptag som håller i pulver. Ett multivitamin med 25 ingredienser i verkningslösa doser ser bra ut på etiketten men gör ingen skillnad i kroppen.",
  },
  {
    q: "Kommer jag känna någon skillnad?",
    a: "Förmodligen inte, och det är ett ärligt svar. Grundnäring arbetar långsiktigt och syns i blodprov, inte i hur veckan känns. Undantaget är magnesium: ligger du lågt kan sömnen bli bättre efter några veckor. Vill du se effekten, mät till exempel D-vitamin och homocystein före och efter tre månader.",
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
    a: "30 dagars öppet köp, även på öppnade förpackningar. Är du inte nöjd mejlar du oss så återbetalar vi hela beloppet. Vi tror på produkten och tar hellre risken än att du ska behöva ta den.",
  },
  {
    q: "Hur fungerar prenumerationen?",
    a: "En ny förpackning levereras var 30:e dag till 20% lägre pris. Du kan pausa, hoppa över en leverans eller avsluta när som helst, utan bindningstid, direkt från ditt konto eller via mejl.",
  },
  {
    q: "Var tillverkas DYGN?",
    a: "DYGN tillverkas i Sverige hos en specialiserad tillverkare av kosttillskott. Varje batch tredjepartstestas för tungmetaller, mikrobiologi och att innehållet stämmer med etiketten. Analyscertifikat på förfrågan.",
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-background">
      <div className="mx-auto max-w-4xl px-4 py-20 md:px-8 md:py-28">
        <h2 id="faq-heading" className="mb-10 font-serif text-3xl md:mb-14 md:text-4xl">
          {"Vanliga frågor"}
        </h2>
        <ul className="divide-y divide-border border-y border-border">
          {FAQS.map((faq, index) => {
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
