// V2-only. Scrollande band av korta fördelar — snabb, scannbar "vad är det bra för".
const ITEMS = [
  "Immunförsvar",
  "Minskad trötthet",
  "Energi",
  "Nervsystem",
  "Muskelfunktion",
  "Starka ben",
  "Elektrolytbalans",
  "En sachet om dagen",
  "Fri frakt",
  "Nöjd kund-garanti",
]

export function BenefitMarquee() {
  const loops = [0, 1]
  return (
    <div className="overflow-hidden border-y border-border bg-secondary py-4" aria-hidden>
      <div className="flex w-max animate-marquee items-center">
        {loops.map((loop) => (
          <div key={loop} className="flex items-center">
            {ITEMS.map((item, i) => (
              <span key={`${loop}-${i}`} className="flex items-center">
                <span className="mx-2.5 whitespace-nowrap rounded-full border border-ink/15 bg-card/60 px-4 py-1.5 text-xs font-medium text-ink/80">
                  {item}
                </span>
                <span className="text-ink/25">&rarr;</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
