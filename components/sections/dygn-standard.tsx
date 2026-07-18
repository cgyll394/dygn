const PILLARS = [
  {
    title: "Rätt form",
    text: "Varje näringsämne i en form med dokumenterat upptag som håller i pulver.",
  },
  {
    title: "Rätt dos",
    text: "Doser med stöd i forskningen där det behövs, dagsbehov där det räcker. Alltid deklarerat.",
  },
  {
    title: "Testad",
    text: "Varje batch tredjepartstestas för tungmetaller, mikrobiologi och att innehållet stämmer med etiketten. Certifikat på förfrågan.",
  },
  {
    title: "Ärlig",
    text: "Vi lovar inget som inte går att hålla. Det som inte känns går att mäta.",
  },
]

export function DygnStandard() {
  return (
    <section className="bg-ink py-20 md:py-28" aria-labelledby="standard-heading">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-ink-muted">Våra fyra principer</p>
        <h2
          id="standard-heading"
          className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-ink-foreground text-balance md:text-5xl"
        >
          DYGN-standarden.
        </h2>
        <div className="mt-10 grid gap-x-10 gap-y-8 border-t border-ink-foreground/15 pt-10 sm:grid-cols-2 lg:grid-cols-4 md:mt-12">
          {PILLARS.map((pillar, index) => (
            <div key={pillar.title}>
              <p className="font-serif text-xl text-primary" aria-hidden>{`0${index + 1}`}</p>
              <h3 className="mt-3 text-base font-semibold text-ink-foreground">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-foreground/70">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
