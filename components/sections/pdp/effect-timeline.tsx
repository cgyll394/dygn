import Image from "next/image"

const phases = [
  {
    label: "Dag 1",
    title: "Rutinen börjar",
    body: "Kalium och magnesium tas upp inom timmar och bidrar till normal vätske- och elektrolytbalans. Resten är ett långsiktigt arbete som just har påbörjats.",
  },
  {
    label: "Vecka 2",
    title: "Nivåerna byggs",
    body: "B12- och folatdepåerna fylls på. Magnesiumbisglycinatets fördel — skonsamt för magen — märks i att rutinen är lätt att hålla.",
  },
  {
    label: "Vecka 4",
    title: "D-vitaminstatus stiger",
    body: "Serumnivåerna av D3 närmar sig platå. K2 arbetar parallellt med att styra kalcium till skelettet, där det hör hemma.",
  },
  {
    label: "Månad 3",
    title: "Full effekt",
    body: "Näringsstatus har stabiliserats på en ny nivå. Det är här skillnaden märks — i återhämtning, energi och det som inte längre saknas.",
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
            Näringsstatus byggs inte på en dag. <em className="italic">Därför heter vi DYGN.</em>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Vattenlösliga vitaminer verkar snabbt. Fettlösliga byggs upp över veckor. Effekten är kumulativ — inte
            omedelbar. En sachet om dagen är hela metoden.
          </p>
          <div className="relative mt-10 hidden aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg md:block">
            <Image
              src="/lifestyle/window.jpg"
              alt="Morgonljus genom fönster"
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
        Tidslinjen är ungefärlig och baserad på typisk upptagsforskning. Individuella resultat varierar.
      </p>
    </section>
  )
}
