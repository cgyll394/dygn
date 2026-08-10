"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

const INGREDIENTS = [
  {
    name: "Vitamin D3",
    form: "Kolekalciferol, vegansk",
    dose: "2000 IE",
    why: "Mellan oktober och mars är solen i Norden för svag för att huden ska kunna producera vitamin D. En stor andel av befolkningen ligger under rekommenderade nivåer hela vinterhalvåret. D3 bidrar till normal immunfunktion, muskelfunktion och benstomme.",
    detail:
      "2000 IE. Dosen som i nordiska studier lyfter blodnivåerna till bra nivåer året om, inte bara över bristgränsen. Växtbaserad.",
  },
  {
    name: "Vitamin K2",
    form: "Menakinon-7 (MK-7)",
    dose: "180 µg",
    why: "K2 arbetar tillsammans med D3: D3 ökar kalciumupptaget, K2 ser till att kalcium hamnar i skelettet i stället för i mjukvävnad. De hör ihop, och därför finns båda i samma sachet.",
    detail:
      "180 µg, samma dos som de fleråriga studierna på benstomme och kärl. MK-7 stannar länge i kroppen, så en dos om dagen räcker.",
  },
  {
    name: "Vitamin B12",
    form: "Cyanokobalamin",
    dose: "100 µg",
    why: "B12 bidrar till normal energiomsättning och minskad trötthet. Behovet ökar med åldern, vid växtbaserad kost och vid hård träning.",
    detail:
      "Cyanokobalamin är den mest stabila formen i pulver, med samma upptag som dyrare varianter. 100 µg ger god marginal, även för dig som äter växtbaserat.",
  },
  {
    name: "Folat",
    form: "Kalcium-L-metylfolat",
    dose: "400 µg",
    why: "Folat behövs för normal blodbildning, psykologisk funktion och minskad trötthet. Uppskattningsvis var tredje person bär genvarianter (MTHFR) som försämrar omvandlingen av syntetisk folsyra till aktivt folat.",
    detail:
      "Den aktiva formen, som fungerar oavsett genuppsättning. Kalciumsaltet håller bäst över tid.",
  },
  {
    name: "Magnesium",
    form: "Bisglycinat",
    dose: "200 mg",
    why: "Magnesium är inblandat i över 300 enzymprocesser: muskelfunktion, nervsystem och minskad trötthet. Intaget i nordisk kost ligger ofta under rekommendationen, särskilt hos aktiva.",
    detail:
      "Bisglycinat är magnesium bundet till aminosyran glycin: skonsamt mot magen och med väldokumenterat upptag. 200 mg, strax under EU:s tak för tillskott.",
  },
  {
    name: "Kalium",
    form: "Citrat",
    dose: "400 mg",
    why: "Kalium bidrar till normal blodtrycksreglering, muskel- och nervfunktion. De flesta får i sig för lite: WHO rekommenderar mer än dubbelt så mycket som genomsnittssvensken äter.",
    detail:
      "400 mg täcker ungefär en tiondel av dagsbehovet, så mycket som ett tillskott får innehålla. Resten ska komma från maten.",
  },
  {
    name: "Zink",
    form: "Glukonat",
    dose: "10 mg",
    why: "Zink bidrar till normal immunfunktion, kognitiv funktion och proteinsyntes. Förluster ökar med svettning, vilket gör aktiva till en riskgrupp för lågt zinkstatus.",
    detail:
      "Glukonat är en av de mest beprövade formerna, med upptag klart bättre än oxiden i billiga tillskott. 10 mg, exakt referensintaget.",
  },
  {
    name: "Jod",
    form: "Natriumjodid",
    dose: "150 µg",
    why: "Jod krävs för normal sköldkörtelfunktion och ämnesomsättning. När allt färre använder joderat bordssalt och fler äter växtbaserat har intaget sjunkit i hela Norden.",
    detail:
      "150 µg, exakt dagsbehovet. Sköldkörteln vill varken ha mer eller mindre. Natriumjodid löser sig direkt i vatten.",
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
              {"Åtta näringsämnen. Inga genvägar."}
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-foreground/70">
              {
                "Åtta näringsämnen med tydlig vetenskap bakom sig och vanliga brister i Norden. Varje form vald för upptag. Varje dos med en anledning. Inga dolda blandningar."
              }
            </p>
            <div className="mt-10 flex gap-10 border-t border-ink-foreground/15 pt-8">
              <div>
                <p className="font-serif text-4xl text-primary">8</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-ink-foreground/60">Näringsämnen</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-primary">0</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-ink-foreground/60">Dolda blandningar</p>
              </div>
              <div>
                <p className="whitespace-nowrap font-serif text-4xl text-primary">{"5 g"}</p>
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
