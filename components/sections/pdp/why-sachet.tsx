import { Check, X } from "lucide-react"

const rows = [
  { label: "Exakt dos varje gång", sachet: true, jar: false, gummies: false },
  { label: "Åtta näringsämnen i ett", sachet: true, jar: false, gummies: false },
  { label: "Utan tillsatt socker", sachet: true, jar: true, gummies: false },
  { label: "Följer med i fickan", sachet: true, jar: false, gummies: true },
  { label: "Förseglad färskhet per portion", sachet: true, jar: false, gummies: false },
  { label: "Doser som följer forskningen", sachet: true, jar: false, gummies: false },
]

function Cell({ value }: { value: boolean }) {
  return (
    <div className="flex justify-center">
      {value ? (
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          <span className="sr-only">Ja</span>
        </span>
      ) : (
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted">
          <X className="h-3.5 w-3.5 text-stone" aria-hidden="true" />
          <span className="sr-only">Nej</span>
        </span>
      )}
    </div>
  )
}

export function WhySachet() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="why-sachet-heading">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Formatet spelar roll
        </p>
        <h2
          id="why-sachet-heading"
          className="mt-4 text-center font-serif text-3xl leading-tight text-balance md:text-5xl"
        >
          Varför en sachet?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-center text-sm leading-relaxed text-muted-foreground">
          Åtta piller om dagen är en behandling. En sachet är en vana.
        </p>

        <div className="mt-12 overflow-hidden rounded-lg border border-border bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="p-4 text-left font-normal text-muted-foreground md:p-5">
                  <span className="sr-only">Egenskap</span>
                </th>
                <th scope="col" className="p-4 text-center text-xs font-semibold uppercase tracking-[0.12em] md:p-5">
                  <span className="text-primary">DYGN</span>
                  <span className="mt-0.5 block font-normal normal-case tracking-normal text-muted-foreground">
                    Sachet
                  </span>
                </th>
                <th
                  scope="col"
                  className="p-4 text-center text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground md:p-5"
                >
                  Pillerburkar
                </th>
                <th
                  scope="col"
                  className="p-4 text-center text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground md:p-5"
                >
                  Gummies
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={row.label} className={index < rows.length - 1 ? "border-b border-border" : ""}>
                  <th scope="row" className="p-4 text-left font-medium md:p-5">
                    {row.label}
                  </th>
                  <td className="bg-primary/[0.04] p-4 md:p-5">
                    <Cell value={row.sachet} />
                  </td>
                  <td className="p-4 md:p-5">
                    <Cell value={row.jar} />
                  </td>
                  <td className="p-4 md:p-5">
                    <Cell value={row.gummies} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
