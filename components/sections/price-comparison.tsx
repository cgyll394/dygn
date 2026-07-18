import Link from "next/link"

const SEPARATE = [
  { name: "Vitamin D3, 2000 IE", price: "ca 99 kr" },
  { name: "Vitamin K2, MK-7", price: "ca 149 kr" },
  { name: "Vitamin B12", price: "ca 89 kr" },
  { name: "Folat, aktiv form", price: "ca 129 kr" },
  { name: "Magnesiumcitrat", price: "ca 119 kr" },
  { name: "Kaliumcitrat", price: "ca 89 kr" },
  { name: "Zinkcitrat", price: "ca 79 kr" },
  { name: "Jod", price: "ca 69 kr" },
]

export function PriceComparison() {
  return (
    <section className="bg-card py-16 md:py-24" aria-labelledby="price-comparison-heading">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 id="price-comparison-heading" className="font-serif text-3xl text-foreground text-balance md:text-5xl">
          Samma innehåll, köpt var för sig
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Vill du hellre bygga ihop formuleringen själv går det. Så här ser det ut i praktiken.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
          <div className="rounded-lg border border-border bg-background p-6 md:p-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Åtta separata burkar
            </h3>
            <ul className="mt-6">
              {SEPARATE.map((row, index) => (
                <li
                  key={row.name}
                  className={`flex items-baseline justify-between gap-4 py-2.5 ${
                    index < SEPARATE.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="text-sm text-muted-foreground">{row.name}</span>
                  <span className="text-sm tabular-nums text-foreground">{row.price}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-baseline justify-between border-t-2 border-foreground pt-4">
              <span className="text-sm font-semibold">Per månad</span>
              <span className="font-serif text-2xl tabular-nums">ca 820 kr</span>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Plus åtta burkar i skåpet och åtta saker att komma ihåg varje morgon.
            </p>
          </div>

          <div className="flex flex-col rounded-lg border-2 border-foreground bg-background p-6 shadow-[0_2px_16px_rgba(15,15,13,0.08)] md:p-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">En DYGN-sachet</h3>
            <ul className="mt-6 flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li>Samma åtta näringsämnen</li>
              <li>Samma former, samma doser</li>
              <li>Löst i ett glas vatten på 30 sekunder</li>
              <li>En sak att komma ihåg</li>
            </ul>
            <div className="mt-auto flex items-baseline justify-between border-t-2 border-foreground pt-4">
              <span className="text-sm font-semibold">Per månad med prenumeration</span>
              <span className="font-serif text-2xl tabular-nums">299 kr</span>
            </div>
            <Link
              href="/produkt"
              className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Förbeställ DYGN
            </Link>
          </div>
        </div>

        <p className="mt-5 max-w-2xl text-[11px] leading-relaxed text-muted-foreground">
          Ungefärliga priser för motsvarande former och doser hos svenska apotek och webbutiker, juli 2026.
          Räkna gärna själv.
        </p>
      </div>
    </section>
  )
}
