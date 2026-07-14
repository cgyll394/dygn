const PHRASES = [
  "Allt kroppen behöver",
  "En sachet om dagen",
  "Åtta näringsämnen",
  "Doserat efter forskning",
]

export function StatementBand() {
  const loop = [...PHRASES, ...PHRASES]
  return (
    <div className="overflow-hidden border-b border-border bg-background py-7 md:py-9" aria-hidden>
      <div className="flex w-max animate-marquee items-center">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {loop.slice(half * PHRASES.length, half * PHRASES.length + PHRASES.length).map((phrase) => (
              <span key={`${half}-${phrase}`} className="flex items-center">
                <span className="whitespace-nowrap px-8 font-serif text-3xl text-foreground/90 md:px-12 md:text-5xl">
                  {phrase}
                </span>
                <span className="h-2 w-2 shrink-0 rounded-full bg-primary md:h-2.5 md:w-2.5" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
