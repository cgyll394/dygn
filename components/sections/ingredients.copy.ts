import type { Lang } from "@/lib/i18n"

const sv = {
  eyebrow: "Formuleringen",
  heading: "Åtta näringsämnen. Inga genvägar.",
  intro:
    "Åtta näringsämnen med tydlig vetenskap bakom sig och vanliga brister i Norden. Varje form vald för upptag. Varje dos med en anledning. Inga dolda blandningar.",
  stats: {
    nutrients: "Näringsämnen",
    blends: "Dolda blandningar",
    perSachet: "Per sachet",
  },
  columns: {
    why: "Varför det ingår",
    form: "Formen och dosen",
  },
  ingredients: [
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
      form: "L-metylfolat",
      dose: "400 µg",
      why: "Folat behövs för normal blodbildning, psykologisk funktion och minskad trötthet. Uppskattningsvis var tredje person bär genvarianter (MTHFR) som försämrar omvandlingen av syntetisk folsyra till aktivt folat.",
      detail:
        "Den aktiva formen (L-5-metyltetrahydrofolat), som fungerar oavsett genuppsättning. Redo att tas upp direkt.",
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
      form: "Pikolinat",
      dose: "10 mg",
      why: "Zink bidrar till normal immunfunktion, kognitiv funktion och proteinsyntes. Förluster ökar med svettning, vilket gör aktiva till en riskgrupp för lågt zinkstatus.",
      detail:
        "Pikolinat är en väl upptagbar, chelaterad form av zink — klart bättre än oxiden i billiga tillskott. 10 mg, exakt referensintaget.",
    },
    {
      name: "Jod",
      form: "Natriumjodid",
      dose: "150 µg",
      why: "Jod krävs för normal sköldkörtelfunktion och ämnesomsättning. När allt färre använder joderat bordssalt och fler äter växtbaserat har intaget sjunkit i hela Norden.",
      detail:
        "150 µg, exakt dagsbehovet. Sköldkörteln vill varken ha mer eller mindre. Natriumjodid löser sig direkt i vatten.",
    },
  ],
}

const en: typeof sv = {
  eyebrow: "The formula",
  heading: "Eight nutrients. No shortcuts.",
  intro:
    "Eight nutrients with clear science behind them and common deficiencies in the Nordics. Every form chosen for absorption. Every dose with a reason. No proprietary blends.",
  stats: {
    nutrients: "Nutrients",
    blends: "Proprietary blends",
    perSachet: "Per sachet",
  },
  columns: {
    why: "Why it’s included",
    form: "The form and the dose",
  },
  ingredients: [
    {
      name: "Vitamin D3",
      form: "Cholecalciferol, vegan",
      dose: "2000 IU",
      why: "Between October and March the sun in the Nordics is too weak for the skin to produce vitamin D. A large share of the population sits below recommended levels throughout the winter months. D3 contributes to normal immune function, muscle function and bones.",
      detail:
        "2000 IU. The dose that in Nordic studies lifts blood levels into a good range all year round, not just above the deficiency threshold. Plant-based.",
    },
    {
      name: "Vitamin K2",
      form: "Menaquinone-7 (MK-7)",
      dose: "180 µg",
      why: "K2 works together with D3: D3 increases calcium absorption, K2 makes sure the calcium ends up in the skeleton rather than in soft tissue. They belong together, which is why both are in the same sachet.",
      detail:
        "180 µg, the same dose as the multi-year studies on bone and blood vessels. MK-7 stays in the body for a long time, so one dose a day is enough.",
    },
    {
      name: "Vitamin B12",
      form: "Cyanocobalamin",
      dose: "100 µg",
      why: "B12 contributes to normal energy-yielding metabolism and to the reduction of tiredness and fatigue. The need increases with age, on a plant-based diet and with hard training.",
      detail:
        "Cyanocobalamin is the most stable form in powder, with the same absorption as more expensive variants. 100 µg gives a good margin, even for those on a plant-based diet.",
    },
    {
      name: "Folate",
      form: "L-methylfolate",
      dose: "400 µg",
      why: "Folate is needed for normal blood formation, psychological function and the reduction of tiredness and fatigue. An estimated one in three people carry gene variants (MTHFR) that impair the conversion of synthetic folic acid into active folate.",
      detail:
        "The active form (L-5-methyltetrahydrofolate), which works regardless of genetic makeup. Ready to be absorbed directly.",
    },
    {
      name: "Magnesium",
      form: "Bisglycinate",
      dose: "200 mg",
      why: "Magnesium is involved in over 300 enzyme processes: muscle function, the nervous system and the reduction of tiredness and fatigue. Intake in the Nordic diet is often below the recommendation, especially among active people.",
      detail:
        "Bisglycinate is magnesium bound to the amino acid glycine: gentle on the stomach and with well-documented absorption. 200 mg, just under the EU ceiling for supplements.",
    },
    {
      name: "Potassium",
      form: "Citrate",
      dose: "400 mg",
      why: "Potassium contributes to normal blood pressure regulation, muscle and nerve function. Most people get too little: the WHO recommends more than twice what the average Swede eats.",
      detail:
        "400 mg covers roughly a tenth of the daily requirement, as much as a supplement is allowed to contain. The rest should come from food.",
    },
    {
      name: "Zinc",
      form: "Picolinate",
      dose: "10 mg",
      why: "Zinc contributes to normal immune function, cognitive function and protein synthesis. Losses increase with sweating, which makes active people a risk group for low zinc status.",
      detail:
        "Picolinate is a well-absorbed, chelated form of zinc — clearly better than the oxide in cheap supplements. 10 mg, exactly the reference intake.",
    },
    {
      name: "Iodine",
      form: "Sodium iodide",
      dose: "150 µg",
      why: "Iodine is required for normal thyroid function and metabolism. As fewer people use iodised table salt and more eat plant-based, intake has fallen across the Nordics.",
      detail:
        "150 µg, exactly the daily requirement. The thyroid wants neither more nor less. Sodium iodide dissolves instantly in water.",
    },
  ],
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
