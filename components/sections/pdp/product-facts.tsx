const details = [
  { label: "Portionsstorlek", value: "1 sachet (4,6 g)" },
  { label: "Portioner per förpackning", value: "30" },
  { label: "Format", value: "Pulver, löses i vatten" },
  { label: "Smak", value: "Mild citrus, utan tillsatt socker" },
  { label: "Kost", value: "Vegansk, glutenfri" },
  { label: "Tillverkning", value: "EU, enligt GMP" },
]

const nutrition = [
  { name: "Vitamin D3 (Vitashine)", dose: "2000 IE / 50 µg", dri: "1000 %" },
  { name: "Vitamin K2 (MenaQ7, MK-7)", dose: "100 µg", dri: "133 %" },
  { name: "Vitamin B12 (metylkobalamin)", dose: "100 µg", dri: "4000 %" },
  { name: "Folat (Quatrefolic, 5-MTHF)", dose: "400 µg", dri: "200 %" },
  { name: "Magnesium (bisglycinat)", dose: "200 mg", dri: "53 %" },
  { name: "Kalium (citrat)", dose: "400 mg", dri: "20 %" },
  { name: "Zink (pikolinat)", dose: "10 mg", dri: "100 %" },
  { name: "Jod (kaliumjodid)", dose: "150 µg", dri: "100 %" },
]

export function ProductFacts() {
  return (
    <section className="border-b border-border" aria-labelledby="facts-heading">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <h2 id="facts-heading" className="sr-only">
          Produktfakta och näringsinnehåll
        </h2>
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <div>
            <h3 className="type-eyebrow">Produktfakta</h3>
            <dl className="mt-7 border-t border-border">
              {details.map((row) => (
                <div key={row.label} className="flex items-baseline justify-between gap-4 border-b border-border py-4">
                  <dt className="text-xs uppercase tracking-[0.1em] text-muted-foreground">{row.label}</dt>
                  <dd className="text-right text-sm">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <div className="flex items-baseline justify-between">
              <h3 className="type-eyebrow">Näringsinnehåll</h3>
              <p className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground">Per sachet</p>
            </div>
            <table className="mt-7 w-full border-t border-border text-sm">
              <thead className="sr-only">
                <tr>
                  <th scope="col">Näringsämne</th>
                  <th scope="col">Mängd</th>
                  <th scope="col">Andel av referensintag</th>
                </tr>
              </thead>
              <tbody>
                {nutrition.map((row) => (
                  <tr key={row.name} className="border-b border-border">
                    <th scope="row" className="py-4 pr-3 text-left font-normal text-muted-foreground">
                      {row.name}
                    </th>
                    <td className="whitespace-nowrap py-4 pr-3 text-right tabular-nums">{row.dose}</td>
                    <td className="whitespace-nowrap py-4 text-right text-xs tabular-nums text-muted-foreground">
                      {row.dri}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-5 text-[11px] leading-relaxed text-muted-foreground">
              {"% avser dagligt referensintag (DRI) för vuxna. Ingredienser: kaliumcitrat, magnesiumbisglycinat, surhetsreglerande medel (citronsyra), naturlig citrusarom, zinkpikolinat, MenaQ7, Quatrefolic, Vitashine D3, metylkobalamin, kaliumjodid."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
