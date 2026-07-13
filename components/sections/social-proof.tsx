import { Star } from "lucide-react"

const MARQUEE_TEXT = "Åtta ingredienser. Inga proprietära blandningar. Inga modetillsatser."

export function Marquee() {
  const items = Array.from({ length: 6 })
  return (
    <div className="overflow-hidden bg-primary py-3" aria-hidden>
      <div className="flex w-max animate-marquee gap-12">
        {items.map((_, i) => (
          <span key={i} className="whitespace-nowrap text-sm text-primary-foreground">
            {MARQUEE_TEXT}
          </span>
        ))}
      </div>
    </div>
  )
}

const REVIEWS = [
  {
    name: "Magnus",
    text: "Jag har provat AG1, multivitaminer från apoteket, allt möjligt. Slutat med varje. DYGN är det första jag faktiskt minns att ta varje morgon. Tror det är att det är en sak att göra, inte sju.",
  },
  {
    name: "Elin",
    text: "Jag läste innehållsförteckningen på det jag tog innan och insåg att hälften var doser som inte gör någon skillnad. DYGN var första gången jag kände att någon faktiskt hade läst studierna innan de formulerade.",
  },
  {
    name: "Anna",
    text: "Mindre att tänka på på morgonen. Det är hela poängen för mig. En sachet, ett glas vatten, klart.",
  },
]

export function Reviews() {
  return (
    <section className="bg-background py-16 md:py-24" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 id="reviews-heading" className="text-center font-serif text-3xl text-foreground text-balance md:text-5xl">
          Vad våra kunder säger
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
          {REVIEWS.map((review) => (
            <figure key={review.name} className="flex flex-col justify-between border border-border bg-card p-6">
              <div>
                <div className="flex gap-1" aria-label="5 av 5 stjärnor">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground">{review.text}</blockquote>
              </div>
              <figcaption className="mt-5 text-sm font-medium text-foreground">{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export function DoctorQuote() {
  return (
    <section className="bg-sage py-16 md:py-24" aria-labelledby="doctor-quote">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-sm text-sage-foreground/80">{"— Dr. Albert Öberg, specialist i allmänmedicin"}</p>
        <blockquote
          id="doctor-quote"
          className="mt-8 max-w-4xl font-serif text-2xl leading-snug text-sage-foreground text-pretty sm:text-3xl md:text-5xl"
        >
          {
            '"De flesta patienter jag möter behöver inte fler kosttillskott. De behöver färre, i rätt dos, på rätt form. DYGN är det första svenska alternativ jag sett som faktiskt formulerats utifrån den principen"'
          }
        </blockquote>
      </div>
    </section>
  )
}
