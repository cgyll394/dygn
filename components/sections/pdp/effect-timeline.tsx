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
    <section className="border-b border-border" aria-labelledby="timeline-heading">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1fr_1.2fr] md:gap-20 md:px-8 md:py-28">
        <div className="md:sticky md:top-28 md:self-start">
          <p className="type-eyebrow">Vad som händer i kroppen</p>
          <h2 id="timeline-heading" className="type-title mt-5">
            Näringsstatus byggs inte på en dag. <em className="italic">Därför heter vi DYGN.</em>
          </h2>
          <p className="type-lede mt-6 max-w-md">
            Vattenlösliga vitaminer verkar snabbt. Fettlösliga byggs upp över veckor. Effekten är kumulativ — inte
            omedelbar. En sachet om dagen är hela metoden.
          </p>
          <p className="mt-10 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Tidslinjen är ungefärlig. Individuella resultat varierar.
          </p>
        </div>
        <ol className="border-t border-border">
          {phases.map((phase) => (
            <li key={phase.label} className="grid gap-2 border-b border-border py-8 sm:grid-cols-[7rem_1fr] sm:gap-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground sm:pt-1.5">
                {phase.label}
              </p>
              <div>
                <h3 className="type-subtitle">{phase.title}</h3>
                <p className="mt-2.5 text-sm leading-[1.7] text-muted-foreground">{phase.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
