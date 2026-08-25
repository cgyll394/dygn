import Link from "next/link"

const ROWS = [
  { name: "Vitamin D3", form: "Vegansk kolekalciferol", dose: "2000 IE" },
  { name: "Vitamin K2", form: "Menakinon-7 (MK-7)", dose: "180 µg" },
  { name: "Vitamin B12", form: "Cyanokobalamin", dose: "100 µg" },
  { name: "Folat", form: "Kalcium-L-metylfolat", dose: "400 µg" },
  { name: "Magnesium", form: "Bisglycinat", dose: "200 mg" },
  { name: "Kalium", form: "Citrat", dose: "400 mg" },
  { name: "Zink", form: "Glukonat", dose: "10 mg" },
  { name: "Jod", form: "Natriumjodid", dose: "150 µg" },
]

export function FormulaPanel() {
  return (
    <section className="bg-ink py-20 text-ink-foreground md:py-28" aria-labelledby="formula-v2-heading">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <span className="block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
          <h2 id="formula-v2-heading" className="mt-6 font-fraunces text-3xl leading-tight text-balance md:text-4xl">
            Åtta näringsämnen. Inga genvägar.
          </h2>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-foreground/55">
            Varje form vald för upptag. Varje dos med en anledning.
          </p>
          <Link
            href="/formulering"
            className="mt-8 inline-block text-xs font-medium uppercase tracking-[0.14em] text-ink-foreground/70 underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            Hela formuleringen
          </Link>
        </div>

        <ul className="divide-y divide-ink-foreground/10 border-y border-ink-foreground/10">
          {ROWS.map((row) => (
            <li key={row.name} className="flex items-baseline gap-4 py-4">
              <span className="w-32 shrink-0 font-fraunces text-lg md:w-40 md:text-xl">{row.name}</span>
              <span className="flex-1 text-xs text-ink-foreground/40">{row.form}</span>
              <span className="text-sm font-medium tabular-nums text-primary">{row.dose}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
