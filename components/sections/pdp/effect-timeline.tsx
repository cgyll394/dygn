import Image from "next/image"

const phases = [
  {
    label: "Dag 1",
    title: "Rutinen börjar",
    body: "Kalium och magnesium tas upp inom timmar och bidrar till normal vätskebalans. Resten arbetar på längre sikt.",
  },
  {
    label: "Vecka 2–4",
    title: "Depåerna fylls",
    body: "B12- och folatnivåerna byggs upp och homocysteinet — blodmarkören de styr — sjunker inom några veckor. Magnesium behöver 6–12 veckor för att nå full nivå i cellerna.",
  },
  {
    label: "Dag 90",
    title: "D-vitamin når platå",
    body: "Blodnivån av D-vitamin planar ut på sin nya nivå efter ungefär tre månader. Vill du se det svart på vitt — mät före och efter.",
  },
  {
    label: "År 1–3",
    title: "Det tysta arbetet",
    body: "Effekten på benstomme och kärl syntes i studier som pågick i tre år. Tyst arbete, precis som det ska vara.",
  },
]

export function EffectTimeline() {
  return (
    <section className="bg-card py-20 md:py-28" aria-labelledby="timeline-heading">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <div className="flex flex-col">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Vad som händer i kroppen</p>
          <h2
            id="timeline-heading"
            className="mt-4 font-serif text-3xl leading-tight text-balance md:text-5xl"
          >
            Näringsstatus byggs inte på en dag. Därför heter vi DYGN.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Vattenlösliga vitaminer verkar snabbt. Fettlösliga byggs upp över veckor och månader. Effekten är
            kumulativ — inte omedelbar. En sachet om dagen är hela metoden.
          </p>
          <div className="relative mt-10 hidden aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg md:block">
            <Image
              src="/lifestyle/morning-table.jpg"
              alt="DYGN-sachet på ett träbord i morgonljus"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
            />
          </div>
        </div>
        <ol className="flex flex-col">
          {phases.map((phase, index) => (
            <li
              key={phase.label}
              className={`flex gap-6 py-8 ${index < phases.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="flex flex-col items-center">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-foreground text-xs font-semibold">
                  {index + 1}
                </span>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{phase.label}</p>
                <h3 className="mt-1.5 font-serif text-xl md:text-2xl">{phase.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{phase.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground md:px-8">
        Tidslinjen bygger på publicerad upptagsforskning. Individuella resultat varierar.
      </p>
    </section>
  )
}
