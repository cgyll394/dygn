import Link from "next/link"

const ROWS = [
  { name: "Vitamin D3", form: "Från lav", dose: "2000 IE" },
  { name: "Vitamin K2", form: "MK-7", dose: "180 µg" },
  { name: "Vitamin B12", form: "Cyanokobalamin", dose: "500 µg" },
  { name: "Folat", form: "L-metylfolat", dose: "400 µg" },
  { name: "Magnesium", form: "Citrat", dose: "200 mg" },
  { name: "Kalium", form: "Citrat", dose: "400 mg" },
  { name: "Zink", form: "Citrat", dose: "15 mg" },
  { name: "Jod", form: "Kaliumjodat", dose: "150 µg" },
]

export function FormulaList() {
  return (
    <section id="formula" aria-labelledby="formula-heading" className="scroll-mt-20 bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Formuleringen</p>
            <h2 id="formula-heading" className="mt-4 font-fraunces text-4xl leading-tight text-balance md:text-5xl">
              {"Åtta näringsämnen. Inga genvägar."}
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-foreground/70">
              Valda för vanliga brister i Norden. Doserade efter forskning. Allt deklarerat.
            </p>
            <Link
              href="/formulering"
              className="mt-8 inline-flex min-h-[44px] items-center rounded-full bg-ink-foreground px-6 text-sm font-medium text-ink transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Hela formuleringen, förklarad
            </Link>
          </div>

          <ul className="divide-y divide-ink-foreground/15 border-y border-ink-foreground/15">
            {ROWS.map((row) => (
              <li key={row.name} className="flex items-baseline gap-4 py-4 md:py-5">
                <span className="w-32 shrink-0 font-serif text-lg md:w-44 md:text-xl">{row.name}</span>
                <span className="flex-1 text-xs text-ink-foreground/50">{row.form}</span>
                <span className="text-sm font-medium tabular-nums text-primary">{row.dose}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
