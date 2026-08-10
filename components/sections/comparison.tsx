import { Check, Minus } from "lucide-react"

const ROWS = [
  { label: "Alla doser deklarerade på etiketten", dygn: true, blends: false, pharmacy: true },
  { label: "Dokumenterade former (5-MTHF, MK-7, bisglycinat)", dygn: true, blends: false, pharmacy: false },
  { label: "Doser i nivåer som studier faktiskt använt", dygn: true, blends: false, pharmacy: false },
  { label: "Utan proprietära blandningar", dygn: true, blends: false, pharmacy: true },
  { label: "Formulerad för nordiska bristmönster", dygn: true, blends: false, pharmacy: false },
  { label: "En dos om dagen, inget schema", dygn: true, blends: true, pharmacy: false },
  { label: "8 ingredienser, inget onödigt", dygn: true, blends: false, pharmacy: false },
]

function Cell({ value }: { value: boolean }) {
  return value ? (
    <span className="inline-flex items-center justify-center">
      <Check className="h-4 w-4 text-primary" aria-hidden />
      <span className="sr-only">Ja</span>
    </span>
  ) : (
    <span className="inline-flex items-center justify-center">
      <Minus className="h-4 w-4 text-muted-foreground/50" aria-hidden />
      <span className="sr-only">Nej</span>
    </span>
  )
}

export function Comparison() {
  return (
    <section className="bg-background py-16 md:py-24" aria-labelledby="comparison-heading">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <h2 id="comparison-heading" className="font-serif text-3xl text-foreground text-balance md:text-5xl">
          Varför DYGN och inte allt annat?
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          De flesta tillskott konkurrerar med längre innehållsförteckningar. Vi konkurrerar med kortare, där varje rad
          har belägg och en dos som betyder något.
        </p>

        {/* Mobil: staplade rader, ingen sidoscroll */}
        <div className="mt-8 md:hidden">
          <div className="grid grid-cols-[1fr_repeat(3,3rem)] items-end gap-x-2 border-b border-border pb-2 text-[10px] font-semibold uppercase leading-tight tracking-wide text-muted-foreground">
            <span className="sr-only">Egenskap</span>
            <span aria-hidden />
            <span className="text-center text-primary">DYGN</span>
            <span className="text-center">Gröna pulver</span>
            <span className="text-center">Apotek</span>
          </div>
          <ul className="divide-y divide-border border-b border-border">
            {ROWS.map((row) => (
              <li key={row.label} className="grid grid-cols-[1fr_repeat(3,3rem)] items-center gap-x-2 py-3.5">
                <span className="pr-2 text-sm leading-snug text-foreground">{row.label}</span>
                <Cell value={row.dygn} />
                <Cell value={row.blends} />
                <Cell value={row.pharmacy} />
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop: tabell */}
        <div className="mt-10 hidden md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-4 pr-4 text-sm font-medium text-muted-foreground">
                  <span className="sr-only">Egenskap</span>
                </th>
                <th scope="col" className="w-28 px-3 py-4 text-center text-sm font-semibold text-foreground">
                  DYGN
                </th>
                <th scope="col" className="w-36 px-3 py-4 text-center text-sm font-medium text-muted-foreground">
                  {"Gröna pulver (AG1, IM8)"}
                </th>
                <th scope="col" className="w-36 px-3 py-4 text-center text-sm font-medium text-muted-foreground">
                  Apotekens multivitamin
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th scope="row" className="py-4 pr-4 text-sm font-normal leading-relaxed text-foreground">
                    {row.label}
                  </th>
                  <td className="bg-card px-3 py-4 text-center">
                    <Cell value={row.dygn} />
                  </td>
                  <td className="px-3 py-4 text-center">
                    <Cell value={row.blends} />
                  </td>
                  <td className="px-3 py-4 text-center">
                    <Cell value={row.pharmacy} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Jämförelsen avser typiska produkter i respektive kategori på den svenska marknaden, baserat på publicerade
          innehållsförteckningar.
        </p>
      </div>
    </section>
  )
}
