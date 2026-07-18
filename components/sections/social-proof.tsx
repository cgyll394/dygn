import { Star, Droplets, FlaskConical, Leaf, MapPin } from "lucide-react"

const BADGES = [
  { icon: MapPin, text: "Tillverkad i Sverige" },
  { icon: FlaskConical, text: "Tredjepartstestad" },
  { icon: Leaf, text: "Vegansk & sockerfri" },
  { icon: Droplets, text: "Rätt form & rätt dos" },
]

export function Marquee() {
  const loops = Array.from({ length: 3 })
  return (
    <div className="overflow-hidden border-y border-border bg-background py-4" aria-hidden>
      <div className="flex w-max animate-marquee items-center">
        {loops.map((_, loop) => (
          <div key={loop} className="flex items-center">
            {BADGES.map(({ icon: Icon, text }) => (
              <span
                key={`${loop}-${text}`}
                className="mx-8 flex items-center gap-2.5 whitespace-nowrap text-xs font-medium uppercase tracking-[0.16em] text-foreground"
              >
                <Icon className="h-4 w-4 text-primary" />
                {text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

const REVIEWS = [
  {
    name: "Magnus, 41",
    title: "Det första jag faktiskt minns att ta",
    text: "Jag har provat AG1, multivitaminer från apoteket, allt möjligt. Slutat med varje. DYGN är det första jag tar varje morgon utan att tänka. Tror det är att det är en sak att göra, inte sju.",
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
    <section className="bg-secondary py-16 md:py-24" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="reviews-heading" className="font-serif text-3xl text-foreground text-balance md:text-5xl">
            Från de som redan börjat
          </h2>
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden />
            ))}
            <span className="ml-1">5,0 i snitt bland tidiga testare</span>
          </p>
        </div>
        <div className="snap-row mt-10 gap-4 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="snap-item flex w-[82vw] max-w-[360px] flex-col justify-between rounded-lg bg-card p-7 md:w-auto md:max-w-none"
            >
              <div>
                <div className="flex gap-1" aria-label="5 av 5 stjärnor">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" aria-hidden />
                  ))}
                </div>
                <p className="mt-4 font-serif text-lg text-foreground">{review.title}</p>
                <blockquote className="mt-2 text-sm leading-relaxed text-muted-foreground">{review.text}</blockquote>
              </div>
              <figcaption className="mt-6 text-xs font-medium uppercase tracking-[0.14em] text-foreground">
                {review.name}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-[11px] leading-relaxed text-muted-foreground">
          {"Från testpanelen: 200 personer, 90 dagar, ingen betalning. Upplevelser varierar."}
        </p>
      </div>
    </section>
  )
}

export function DoctorQuote() {
  return (
    <section className="bg-ink py-20 md:py-28" aria-labelledby="doctor-quote">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-ink-muted">
          {"Dr. Albert Öberg, specialist i allmänmedicin"}
        </p>
        <blockquote
          id="doctor-quote"
          className="mt-8 max-w-5xl font-serif text-2xl leading-snug text-ink-foreground text-pretty sm:text-3xl md:text-5xl md:leading-[1.15]"
        >
          {
            '"De flesta patienter jag möter behöver inte fler kosttillskott. De behöver färre, i rätt dos, på rätt form. DYGN är det första svenska alternativ jag sett som formulerats utifrån den principen."'
          }
        </blockquote>
        <div className="mt-10 h-px w-24 bg-primary" aria-hidden />
      </div>
    </section>
  )
}
