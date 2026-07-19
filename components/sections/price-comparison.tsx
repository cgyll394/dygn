import Link from "next/link"
import { Check } from "lucide-react"

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

          <div className="flex flex-col rounded-lg bg-ink p-6 text-ink-foreground md:p-8">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">En DYGN-sachet</h3>
              <span className="text-[11px] uppercase tracking-[0.12em] text-ink-muted">4,6 g om dagen</span>
            </div>
            <ul className="mb-8 mt-7 flex flex-col gap-3">
              {[
                "Samma åtta näringsämnen",
                "Samma former, samma doser",
                "Löst i ett glas vatten på 30 sekunder",
                "En sak att komma ihåg",
              ].map((row) => (
                <li key={row} className="flex items-center gap-3 text-sm text-ink-foreground/85">
                  <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                  {row}
                </li>
              ))}
            </ul>
            <div className="mt-auto border-t border-ink-foreground/20 pt-5">
              <p className="text-[11px] uppercase tracking-[0.14em] text-ink-muted">Per månad med prenumeration</p>
              <div className="mt-1.5 flex flex-wrap items-baseline gap-x-3">
                <span className="font-serif text-5xl tabular-nums">299 kr</span>
                <span className="text-sm text-ink-foreground/70">10 kr per dag</span>
              </div>
            </div>
            <Link
              href="/produkt"
              className="mt-7 inline-flex min-h-[48px] items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
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
