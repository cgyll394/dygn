"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

const INGREDIENTS = [
  {
    name: "Vitamin D3",
    form: "Kolekalciferol (Vitashine)",
    dose: "2000 IE",
    why: "Mellan oktober och mars är solen i Norden för svag för att huden ska kunna producera vitamin D. Studier visar att en stor andel av den nordiska befolkningen ligger under rekommenderade nivåer under vinterhalvåret. D3 bidrar till normal muskelfunktion, immunfunktion och benstomme.",
    detail:
      "Vi använder Vitashine — en växtbaserad D3 från lav, med dokumenterad stabilitet och upptag. 2000 IE är dosen som i studier krävs för att lyfta serumnivåerna hos vuxna i norra Europa till optimala nivåer, inte bara över bristgränsen.",
  },
  {
    name: "Vitamin K2",
    form: "MK-7 (MenaQ7)",
    dose: "100 µg",
    why: "K2 arbetar tillsammans med D3: D3 ökar kalciumupptaget, K2 ser till att kalcium hamnar i skelettet i stället för i mjukvävnad. De hör ihop, och därför finns båda i samma sachet.",
    detail:
      "MenaQ7 är den mest studerade formen av MK-7, med dokumenterad effekt på benhälsa i kliniska studier. MK-7 har betydligt längre halveringstid än MK-4, vilket ger jämna nivåer med en dos om dagen.",
  },
  {
    name: "Vitamin B12",
    form: "Metylkobalamin",
    dose: "100 µg",
    why: "B12 bidrar till normal energiomsättning och minskad trötthet. Behovet ökar med åldern, vid växtbaserad kost och vid hård träning.",
    detail:
      "Metylkobalamin är den aktiva formen som kroppen använder direkt, utan omvandlingssteget som krävs för syntetiskt cyanokobalamin. 100 µg täcker dagsbehovet med god marginal även vid lägre upptag.",
  },
  {
    name: "Folat",
    form: "5-MTHF (Quatrefolic)",
    dose: "400 µg",
    why: "Folat behövs för normal blodbildning och cellfunktion. Uppskattningsvis var tredje person bär på genvarianter (MTHFR) som försämrar förmågan att omvandla syntetisk folsyra till aktivt folat.",
    detail:
      "Quatrefolic är 5-MTHF — den redan aktiva formen. Den fungerar oavsett genuppsättning och lämnar ingen ometaboliserad folsyra i blodet.",
  },
  {
    name: "Magnesium",
    form: "Bisglycinat",
    dose: "200 mg",
    why: "Magnesium är inblandat i över 300 enzymprocesser — muskelfunktion, nervsystem, sömn och energiomsättning. Intaget i nordisk kost ligger ofta under rekommendationen, särskilt hos aktiva.",
    detail:
      "Bisglycinat är magnesium bundet till aminosyran glycin. Det ger högt upptag utan den laxerande effekt som billigare former som oxid ofta ger. 200 mg kompletterar en normal kost utan att överdosera.",
  },
  {
    name: "Kalium",
    form: "Citrat",
    dose: "400 mg",
    why: "Kalium bidrar till normal blodtrycksreglering, muskel- och nervfunktion. De flesta får i sig för lite — WHO rekommenderar mer än dubbelt så mycket som genomsnittssvensken äter.",
    detail:
      "Citratformen är väl studerad och skonsam mot magen. 400 mg är en meningsfull dos som kompletterar kosten — mer hör inte hemma i ett kosttillskott.",
  },
  {
    name: "Zink",
    form: "Pikolinat",
    dose: "10 mg",
    why: "Zink bidrar till normal immunfunktion, proteinsyntes och testosteronnivåer. Förluster ökar med svettning, vilket gör aktiva till en riskgrupp för lågt zinkstatus.",
    detail:
      "Pikolinat är en av de mest välabsorberade zinkformerna. 10 mg fyller gapet utan att störa kopparbalansen, vilket långvarigt höga zinkdoser kan göra.",
  },
  {
    name: "Jod",
    form: "Kaliumjodid",
    dose: "150 µg",
    why: "Jod krävs för normal sköldkörtelfunktion och ämnesomsättning. När allt färre använder joderat bordssalt och fler äter växtbaserat har intaget sjunkit i hela Norden.",
    detail:
      "150 µg motsvarar det dagliga referensintaget för vuxna — varken mer eller mindre. Sköldkörteln är känslig för både för lite och för mycket jod.",
  },
]

export function Ingredients() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="formula" aria-labelledby="ingredients-heading" className="scroll-mt-20 bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Formuleringen</p>
            <h2 id="ingredients-heading" className="mt-4 font-serif text-4xl leading-tight text-balance md:text-5xl">
              {"Åtta näringsämnen. Inte fler. Inte färre."}
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-foreground/70">
              {
                "Vi har valt åtta näringsämnen där det finns tydlig vetenskap, vanliga brister i nordisk kost, och bioaktiva former som kroppen faktiskt tar upp. Resten har vi medvetet lämnat utanför. Allt deklarerat — inga proprietära blandningar."
              }
            </p>
            <div className="mt-10 flex gap-10 border-t border-ink-foreground/15 pt-8">
              <div>
                <p className="font-serif text-4xl text-primary">8</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-ink-foreground/60">Ingredienser</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-primary">0</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-ink-foreground/60">Dolda blandningar</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-primary">{"4,6 g"}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-ink-foreground/60">Per sachet</p>
              </div>
            </div>
          </div>

          <ul className="divide-y divide-ink-foreground/15 border-y border-ink-foreground/15">
            {INGREDIENTS.map((ingredient, index) => {
              const isOpen = openIndex === index
              return (
                <li key={ingredient.name}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left transition-opacity hover:opacity-70"
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
                          {"Varför det ingår"}
                        </h3>
                        <p className="text-sm leading-relaxed text-ink-foreground/80">{ingredient.why}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-xs font-medium uppercase tracking-wide text-ink-foreground/50">
                          {"Formen och dosen"}
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
