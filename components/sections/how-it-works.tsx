import Image from "next/image"

const STEPS = [
  {
    number: "01",
    title: "Riv upp",
    text: "En sachet, 4,6 gram. Ta den med dig till jobbet, träningen eller resan. Ingen burk, ingen dosett.",
  },
  {
    number: "02",
    title: "Rör ut i vatten",
    text: "Löses i ett glas kallt vatten på under 30 sekunder. Mild citrussmak utan sötningsmedel som dominerar.",
  },
  {
    number: "03",
    title: "Klart för dagen",
    text: "Åtta näringsämnen i former kroppen tar upp. Sedan behöver du inte tänka på det mer.",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-card py-16 md:py-24" aria-labelledby="how-heading">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/lifestyle/morning-table.jpg"
              alt="DYGN-sachet på ett träbord i morgonljus"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-primary">Så fungerar det</p>
            <h2 id="how-heading" className="mt-3 font-serif text-3xl text-foreground text-balance md:text-5xl">
              En sak att göra. Inte sju.
            </h2>
            <ol className="mt-10 flex flex-col gap-8">
              {STEPS.map((step) => (
                <li key={step.number} className="flex gap-5">
                  <span className="font-serif text-xl text-primary" aria-hidden>
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
