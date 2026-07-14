import { Reveal } from "@/components/reveal"

const REVIEWS = [
  {
    name: "Magnus, 41",
    title: "Det första jag faktiskt minns att ta",
    text: "Jag har provat greens, multivitaminer från apoteket, allt möjligt. Slutat med varje. DYGN är det första jag tar varje morgon utan att tänka. Tror det är att det är en sak att göra, inte sju.",
  },
  {
    name: "Elin, 34",
    title: "Någon har läst studierna",
    text: "Jag läste innehållsförteckningen på det jag tog innan och insåg att hälften var doser som inte gör någon skillnad. DYGN var första gången jag kände att någon faktiskt läst forskningen innan de formulerade.",
  },
  {
    name: "Anna, 29",
    title: "En sak. Klart.",
    text: "Mindre att tänka på på morgonen. Det är hela poängen för mig. En sachet, ett glas vatten, klart.",
  },
]

export function Reviews() {
  return (
    <section className="border-b border-border" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Reveal>
              <p className="type-eyebrow">Ur testpanelen</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 id="reviews-heading" className="type-title mt-5">
                Från de som redan börjat
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
              200 personer använde DYGN i 90 dagar före lansering.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-10 border-t border-border pt-10 md:grid-cols-3 md:gap-12">
          {REVIEWS.map((review, index) => (
            <Reveal key={review.name} delay={index * 110}>
              <figure className="flex h-full flex-col justify-between">
                <div>
                  <p className="type-subtitle">{review.title}</p>
                  <blockquote className="mt-3.5 text-sm leading-[1.7] text-muted-foreground">
                    {review.text}
                  </blockquote>
                </div>
                <figcaption className="type-eyebrow mt-7">{review.name}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
