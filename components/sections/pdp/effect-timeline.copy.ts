import type { Lang } from "@/lib/i18n"

const sv = {
  eyebrow: "Vad som händer i kroppen",
  heading: "Näringsstatus byggs inte på en dag. Därför heter vi DYGN.",
  intro:
    "Vattenlösliga vitaminer verkar snabbt. Fettlösliga byggs upp över veckor och månader. Effekten är kumulativ, inte omedelbar. En sachet om dagen är hela metoden.",
  imageAlt: "DYGN-sachet på ett träbord i morgonljus",
  phases: [
    {
      label: "Dag 1",
      title: "Rutinen börjar",
      body: "Kalium och magnesium tas upp inom timmar och bidrar till normal vätskebalans. Resten arbetar på längre sikt.",
    },
    {
      label: "Vecka 2–4",
      title: "Depåerna fylls",
      body: "B12- och folatnivåerna byggs upp och blodmarkören homocystein sjunker inom några veckor. Magnesium behöver 6–12 veckor för att nå full nivå i cellerna.",
    },
    {
      label: "Dag 90",
      title: "D-vitamin når platå",
      body: "Blodnivån av D-vitamin planar ut på sin nya nivå efter ungefär tre månader. Vill du se det svart på vitt: mät före och efter.",
    },
    {
      label: "År 1–3",
      title: "Det tysta arbetet",
      body: "Effekten på benstomme och kärl syntes i studier som pågick i tre år. Tyst arbete, precis som det ska vara.",
    },
  ],
  footnote: "Tidslinjen bygger på publicerad upptagsforskning. Individuella resultat varierar.",
}

const en: typeof sv = {
  eyebrow: "What happens in the body",
  heading: "Nutrient status isn’t built in a day. That’s why we’re called DYGN.",
  intro:
    "Water-soluble vitamins act quickly. Fat-soluble ones build up over weeks and months. The effect is cumulative, not immediate. One sachet a day is the whole method.",
  imageAlt: "DYGN sachet on a wooden table in morning light",
  phases: [
    {
      label: "Day 1",
      title: "The routine begins",
      body: "Potassium and magnesium are absorbed within hours and contribute to normal fluid balance. The rest works over the longer term.",
    },
    {
      label: "Weeks 2–4",
      title: "The stores fill up",
      body: "B12 and folate levels build up and the blood marker homocysteine falls within a few weeks. Magnesium needs 6–12 weeks to reach full levels in the cells.",
    },
    {
      label: "Day 90",
      title: "Vitamin D plateaus",
      body: "Blood levels of vitamin D settle at their new level after around three months. If you want it in black and white: measure before and after.",
    },
    {
      label: "Years 1–3",
      title: "The quiet work",
      body: "The effect on bone and blood vessels was seen in studies that ran for three years. Quiet work, exactly as it should be.",
    },
  ],
  footnote: "The timeline is based on published absorption research. Individual results vary.",
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
