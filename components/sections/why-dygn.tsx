import Image from "next/image"

const CARDS = [
  {
    stat: "8",
    title: "Näringsämnen. Inte 25.",
    text: "Bara ämnen med tydlig evidens och dokumenterat vanliga brister i nordisk kost. Resten har vi medvetet lämnat utanför.",
    image: "/lifestyle/track-pov.jpg",
    alt: "Hand som håller en DYGN-sachet över en löparbana",
  },
  {
    stat: "180 µg",
    title: "K2 i studiedos.",
    text: "Samma dos som de treåriga kliniska studierna använde — höjd från 100 µg för att matcha forskningen, inte marknadsföringen.",
    image: null,
    alt: "",
  },
  {
    stat: "0",
    title: "Dolda blandningar.",
    text: "Varje dos deklarerad på förpackningen och förklarad på den här sidan. Även när svaret är 'det här är en RDI-dos'.",
    image: null,
    alt: "",
  },
  {
    stat: "100 %",
    title: "Tredjepartstestad.",
    text: "Varje batch testas av oberoende labb för tungmetaller, mikrobiologi och att innehållet stämmer med etiketten.",
    image: "/lifestyle/stadium.jpg",
    alt: "Löpare öppnar en DYGN-sachet på en läktare",
  },
]

export function WhyDygn() {
  return (
    <section className="bg-background py-16 md:py-24" aria-labelledby="why-heading">
      <div className="mx-auto max-w-7xl md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 px-5 md:px-0">
          <h2 id="why-heading" className="font-serif text-3xl text-foreground text-balance md:text-5xl">
            Varför DYGN?
          </h2>
          <p className="hidden text-xs uppercase tracking-[0.14em] text-muted-foreground sm:block md:hidden">
            Svep för fler
          </p>
        </div>
        <div className="snap-row mt-8 gap-4 px-5 md:mt-10 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 lg:grid-cols-4">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="snap-item flex w-[78vw] max-w-[340px] flex-col overflow-hidden rounded-lg bg-card md:w-auto md:max-w-none"
            >
              {card.image && (
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 78vw"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <p className="font-serif text-4xl text-primary">{card.stat}</p>
                <h3 className="mt-3 text-base font-semibold text-foreground">{card.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
