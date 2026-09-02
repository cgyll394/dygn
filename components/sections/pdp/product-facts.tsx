import type { Lang } from "@/lib/i18n"
import { COPY } from "./product-facts.copy"

export function ProductFacts({ lang }: { lang: Lang }) {
  const t = COPY[lang]

  return (
    <section className="py-20 md:py-28" aria-labelledby="facts-heading">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 id="facts-heading" className="sr-only">
          {t.srHeading}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <div className="rounded-lg border border-border bg-card p-6 md:p-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{t.detailsHeading}</h3>
            <dl className="mt-6">
              {t.details.map((row, index) => (
                <div
                  key={row.label}
                  className={`flex items-baseline justify-between gap-4 py-3.5 ${
                    index < t.details.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <dt className="text-xs uppercase tracking-[0.1em] text-muted-foreground">{row.label}</dt>
                  <dd className="text-right text-sm font-medium">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 md:p-8">
            <div className="flex items-baseline justify-between">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{t.nutritionHeading}</h3>
              <p className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground">{t.perSachet}</p>
            </div>
            <table className="mt-6 w-full text-sm">
              <thead className="sr-only">
                <tr>
                  <th scope="col">{t.columns.nutrient}</th>
                  <th scope="col">{t.columns.amount}</th>
                  <th scope="col">{t.columns.share}</th>
                </tr>
              </thead>
              <tbody>
                {t.nutrition.map((row, index) => (
                  <tr key={row.name} className={index < t.nutrition.length - 1 ? "border-b border-border" : ""}>
                    <th scope="row" className="py-3 pr-3 text-left font-normal text-muted-foreground">
                      {row.name}
                    </th>
                    <td className="whitespace-nowrap py-3 pr-3 text-right font-medium tabular-nums">{row.dose}</td>
                    <td className="whitespace-nowrap py-3 text-right text-xs tabular-nums text-muted-foreground">
                      {row.dri}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-[11px] leading-relaxed text-muted-foreground">{t.footnote}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
