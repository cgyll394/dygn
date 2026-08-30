import { Zap, Shield, Bone, Droplets, Sparkles } from "lucide-react"
import { DayDotsRow } from "@/components/day-dots-row"

// V2-only. Punchy ikon-rad i stället för de texttunga korten — fördelarna
// syns direkt. Copy är avsiktligt kort; skärps mot EFSA-formuleringar senare.
const BENEFITS = [
  { icon: Zap, title: "Energi varje dag", text: "Magnesium, B12 och folat mot trötthet" },
  { icon: Shield, title: "Immunförsvar", text: "D-vitamin och zink, året om" },
  { icon: Bone, title: "Ben & muskler", text: "K2, D3 och magnesium" },
  { icon: Droplets, title: "Elektrolytbalans", text: "Kalium och magnesium, känns direkt" },
  { icon: Sparkles, title: "30 sekunder", text: "En sachet, inget krångel" },
]

export function BenefitsV2() {
  return (
    <section className="bg-background py-16 md:py-24" aria-labelledby="benefits-v2-heading">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Därför DYGN</p>
          <h2
            id="benefits-v2-heading"
            className="mx-auto mt-3 max-w-xl font-fraunces text-3xl text-foreground text-balance md:text-5xl"
          >
            Gjord för att göra skillnad.
          </h2>
          <DayDotsRow className="mt-6 flex justify-center text-ink" />
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:mt-16 lg:grid-cols-5">
          {BENEFITS.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex flex-col items-center text-center">
              <Icon className="h-7 w-7 text-ink" strokeWidth={1.5} aria-hidden />
              <h3 className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-foreground">{title}</h3>
              <p className="mt-2 max-w-[22ch] text-xs leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
