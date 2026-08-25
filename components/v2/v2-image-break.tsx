import Image from "next/image"
import { DayDotsRow } from "@/components/day-dots-row"

// Samma mönster som v1:s ImageBreak: en bild, en rad. Runclub-fotot
// som var hero i v1 lever vidare här.
export function V2ImageBreak() {
  return (
    <section className="relative flex min-h-[85svh] items-end overflow-hidden bg-ink" aria-label="DYGN i rörelse">
      <Image
        src="/lifestyle/runclub-bottle.jpg"
        alt="Löpare håller upp en DYGN-sachet och vattenflaska efter ett pass"
        fill
        className="object-cover object-[46%_28%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" aria-hidden />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 md:px-8 md:pb-16">
        <p className="max-w-xl font-fraunces text-3xl leading-tight text-ink-foreground text-balance md:text-5xl">
          En sachet om dagen. Det är hela metoden.
        </p>
        <DayDotsRow className="mt-6 flex" />
      </div>
    </section>
  )
}
