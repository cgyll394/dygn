const BENEFITS = [
  {
    number: "01",
    title: "Energi i vardagen",
    text: "Två av tre svenskar känner sig ofta trötta. Magnesium, B12 och folat bidrar till att minska trötthet och utmattning, dag efter dag.",
  },
  {
    number: "02",
    title: "Elektrolyter du kan känna",
    text: "Kalium och magnesium bidrar till normal muskelfunktion och vätskebalans. Tränar och svettas du mycket är det här delen av DYGN som faktiskt märks, ofta redan samma dag.",
  },
  {
    number: "03",
    title: "Immunförsvar året om",
    text: "D-vitamin och zink bidrar till immunsystemets normala funktion. Som mest värdefullt från oktober till mars, när solen inte räcker till.",
  },
  {
    number: "04",
    title: "Starkare på sikt",
    text: "D3, K2 och magnesium bidrar till att bibehålla normal benstomme. Det tysta arbetet du inte känner, men som gör störst skillnad över åren.",
  },
]

export function Benefits() {
  return (
    <section className="bg-background py-16 md:py-24" aria-labelledby="benefits-heading">
      <div className="mx-auto max-w-7xl md:px-8">
        <div className="px-5 md:px-0">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Därför DYGN</p>
          <h2 id="benefits-heading" className="mt-3 max-w-xl font-serif text-3xl text-foreground text-balance md:text-5xl">
            Gjord för att tas varje dag. Byggd för att göra skillnad.
          </h2>
        </div>
        <div className="snap-row mt-8 gap-4 px-5 md:mt-10 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 lg:grid-cols-4">
          {BENEFITS.map((benefit) => (
            <article
              key={benefit.number}
              className="snap-item flex w-[78vw] max-w-[330px] flex-col rounded-lg bg-card p-6 md:w-auto md:max-w-none md:p-7"
            >
              <p className="font-serif text-xl text-primary" aria-hidden>
                {benefit.number}
              </p>
              <h3 className="mt-3 text-base font-semibold text-foreground">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
