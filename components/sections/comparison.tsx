import { Check, Minus } from "lucide-react"
import type { Lang } from "@/lib/i18n"
import { COPY } from "./comparison.copy"

type Copy = (typeof COPY)[Lang]

/** Bockar per rad, zippas med radtexterna i comparison.copy.ts (samma ordning). */
const ROWS = [
  { dygn: true, blends: false, pharmacy: true }, // Alla doser deklarerade
  { dygn: true, blends: false, pharmacy: false }, // Dokumenterade former
  { dygn: true, blends: false, pharmacy: false }, // Doser som studier använt
  { dygn: true, blends: false, pharmacy: true }, // Utan proprietära blandningar
  { dygn: true, blends: false, pharmacy: false }, // Nordiska bristmönster
  { dygn: true, blends: true, pharmacy: false }, // En dos om dagen
  { dygn: true, blends: false, pharmacy: false }, // 8 ingredienser
]

function Cell({ value, t }: { value: boolean; t: Copy }) {
  return value ? (
    <span className="inline-flex items-center justify-center">
      <Check className="h-4 w-4 text-primary" aria-hidden />
      <span className="sr-only">{t.yes}</span>
    </span>
  ) : (
    <span className="inline-flex items-center justify-center">
      <Minus className="h-4 w-4 text-muted-foreground/50" aria-hidden />
      <span className="sr-only">{t.no}</span>
    </span>
  )
}

export function Comparison({ lang }: { lang: Lang }) {
  const t = COPY[lang]
  return (
    <section className="bg-background py-16 md:py-24" aria-labelledby="comparison-heading">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <h2 id="comparison-heading" className="font-serif text-3xl text-foreground text-balance md:text-5xl">
          {t.heading}
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">{t.intro}</p>

        {/* Mobil: staplade rader, ingen sidoscroll */}
        <div className="mt-8 md:hidden">
          <div className="grid grid-cols-[1fr_repeat(3,3rem)] items-end gap-x-2 border-b border-border pb-2 text-[10px] font-semibold uppercase leading-tight tracking-wide text-muted-foreground">
            <span className="sr-only">{t.feature}</span>
            <span aria-hidden />
            <span className="text-center text-primary">{t.columns.mobile.dygn}</span>
            <span className="text-center">{t.columns.mobile.blends}</span>
            <span className="text-center">{t.columns.mobile.pharmacy}</span>
          </div>
          <ul className="divide-y divide-border border-b border-border">
            {ROWS.map((row, i) => {
              const label = t.rows[i]
              return (
                <li key={label} className="grid grid-cols-[1fr_repeat(3,3rem)] items-center gap-x-2 py-3.5">
                  <span className="pr-2 text-sm leading-snug text-foreground">{label}</span>
                  <Cell value={row.dygn} t={t} />
                  <Cell value={row.blends} t={t} />
                  <Cell value={row.pharmacy} t={t} />
                </li>
              )
            })}
          </ul>
        </div>

        {/* Desktop: tabell */}
        <div className="mt-10 hidden md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="py-4 pr-4 text-sm font-medium text-muted-foreground">
                  <span className="sr-only">{t.feature}</span>
                </th>
                <th scope="col" className="w-28 px-3 py-4 text-center text-sm font-semibold text-foreground">
                  {t.columns.desktop.dygn}
                </th>
                <th scope="col" className="w-36 px-3 py-4 text-center text-sm font-medium text-muted-foreground">
                  {t.columns.desktop.blends}
                </th>
                <th scope="col" className="w-36 px-3 py-4 text-center text-sm font-medium text-muted-foreground">
                  {t.columns.desktop.pharmacy}
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => {
                const label = t.rows[i]
                return (
                  <tr key={label} className="border-b border-border">
                    <th scope="row" className="py-4 pr-4 text-sm font-normal leading-relaxed text-foreground">
                      {label}
                    </th>
                    <td className="bg-card px-3 py-4 text-center">
                      <Cell value={row.dygn} t={t} />
                    </td>
                    <td className="px-3 py-4 text-center">
                      <Cell value={row.blends} t={t} />
                    </td>
                    <td className="px-3 py-4 text-center">
                      <Cell value={row.pharmacy} t={t} />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">{t.footnote}</p>
      </div>
    </section>
  )
}
