"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

const INGREDIENTS = [
  {
    name: "Vitamin D3",
    form: "Kolekalciferol (Vitashine)",
    dose: "2000 IE",
    why: "Mellan oktober och mars är solen i Norden för svag för att huden ska kunna producera vitamin D. En stor andel av befolkningen ligger under rekommenderade nivåer hela vinterhalvåret. D3 bidrar till normal immunfunktion, muskelfunktion och benstomme.",
    detail:
      "2000 IE är dosen som i studier (bl.a. BEST-D, Oxford) lyfter blodnivåerna hos vuxna i norra Europa till optimala nivåer — inte bara över bristgränsen. RDI är 600–800 IE; det här är en av doserna där vi medvetet ligger över. Vitashine är växtbaserad D3 från lav.",
  },
  {
    name: "Vitamin K2",
    form: "MK-7 (MenaQ7)",
    dose: "180 µg",
    why: "K2 arbetar tillsammans med D3: D3 ökar kalciumupptaget, K2 ser till att kalcium hamnar i skelettet i stället för i mjukvävnad. De hör ihop, och därför finns båda i samma sachet.",
    detail:
      "180 µg är exakt dosen från de treåriga kliniska studierna (Knapen m.fl.) som visade bevarad benmassa och förbättrad kärlelasticitet. Tidigare innehöll DYGN 100 µg — vi höjde för att matcha forskningen, inte för att större siffror säljer. MK-7 har lång halveringstid, så en dos om dagen räcker.",
  },
  {
    name: "Vitamin B12",
    form: "Cyanokobalamin",
    dose: "500 µg",
    why: "B12 bidrar till normal energiomsättning och minskad trötthet. Behovet ökar med åldern, vid växtbaserad kost och vid hård träning — och kroppen tar bara upp någon procent av en oral dos passivt.",
    detail:
      "Vi använder cyanokobalamin — inte för att det låter finast, utan för att det är den mest stabila formen i pulver. Amerikanska NIH konstaterar att upptaget inte skiljer sig mellan formerna. 500 µg ger marginal även för veganer och äldre med lägre upptag.",
  },
  {
    name: "Folat",
    form: "Kalcium-L-metylfolat",
    dose: "400 µg",
    why: "Folat behövs för normal blodbildning, psykologisk funktion och minskad trötthet. Uppskattningsvis var tredje person bär genvarianter (MTHFR) som försämrar omvandlingen av syntetisk folsyra till aktivt folat.",
    detail:
      "L-metylfolat är den redan aktiva formen — den fungerar oavsett genuppsättning och lämnar ingen ometaboliserad folsyra i blodet. Vi valde kalciumsaltet för att det är den mest stabila varianten i pulver över tid.",
  },
  {
    name: "Magnesium",
    form: "Citrat",
    dose: "200 mg",
    why: "Magnesium är inblandat i över 300 enzymprocesser — muskelfunktion, nervsystem och minskad trötthet. Intaget i nordisk kost ligger ofta under rekommendationen, särskilt hos aktiva.",
    detail:
      "Citrat löser sig rent i vatten och har i isotopstudier upptag i nivå med de bästa formerna. Bisglycinat — som vi använde tidigare — är i praktiken en kapselform som inte löser sig snyggt i dryck. 200 mg ligger medvetet under EU:s tak för tillskott (250 mg).",
  },
  {
    name: "Kalium",
    form: "Citrat",
    dose: "400 mg",
    why: "Kalium bidrar till normal blodtrycksreglering, muskel- och nervfunktion. De flesta får i sig för lite — WHO rekommenderar mer än dubbelt så mycket som genomsnittssvensken äter.",
    detail:
      "Ärligt talat: 400 mg är cirka tio procent av dagsbehovet — ett bidrag, inte en lösning. Tillskott är av säkerhetsskäl begränsade till ungefär den här nivån (tyska BfR:s tak är 500 mg). Resten ska komma från maten, och det säger vi hellre rakt ut än låtsas något annat.",
  },
  {
    name: "Zink",
    form: "Citrat",
    dose: "15 mg",
    why: "Zink bidrar till normal immunfunktion, kognitiv funktion och proteinsyntes. Förluster ökar med svettning, vilket gör aktiva till en riskgrupp för lågt zinkstatus.",
    detail:
      "Den bästa mätmetoden som finns (dubbelisotopstudier, ETH Zürich) visar att citrat tas upp lika bra som de dyraste formerna — och bättre än oxid som dominerar billiga tillskott. 15 mg matchar doserna i immunstudierna och ligger tryggt under EU:s tak på 25 mg.",
  },
  {
    name: "Jod",
    form: "Kaliumjodat",
    dose: "150 µg",
    why: "Jod krävs för normal sköldkörtelfunktion och ämnesomsättning. När allt färre använder joderat bordssalt och fler äter växtbaserat har intaget sjunkit i hela Norden.",
    detail:
      "150 µg är exakt det dagliga referensintaget — varken mer eller mindre, för sköldkörteln är känslig åt båda hållen. Det här är en RDI-dos, inget annat, och det står vi för. Jodat är formen som håller bäst i pulver.",
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
              {"Åtta näringsämnen. Rätt form. Rätt dos. Förklarat."}
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-foreground/70">
              {
                "Vi har valt åtta näringsämnen med tydlig vetenskap och vanliga brister i nordisk kost. Varje form är vald för dokumenterat upptag och stabilitet i pulver — och varje dos har en förklaring. Där forskningen motiverar mer än RDI ligger vi över. Där RDI är rätt säger vi det. Inga proprietära blandningar."
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
                <p className="whitespace-nowrap font-serif text-4xl text-primary">{"4,6 g"}</p>
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
