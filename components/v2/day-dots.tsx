const TOTAL = 30
const DONE = 11 // fyllda prickar: dagar som redan checkats av
const TODAY = DONE // index för dagens prick, markerad med orange ring

export function DayDots() {
  return (
    <section className="bg-background py-24 md:py-32" aria-labelledby="dots-heading">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <span className="mx-auto block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
        <h2 id="dots-heading" className="mt-6 font-fraunces text-3xl leading-tight text-ink text-balance md:text-5xl">
          En prick. Ett dygn.
        </h2>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
          30 sachets i varje ask. En om dagen, sedan börjar du om.
        </p>

        <div className="mx-auto mt-12 grid max-w-xs grid-cols-10 gap-x-3 gap-y-4 md:max-w-sm" aria-hidden>
          {Array.from({ length: TOTAL }).map((_, i) => {
            const isDone = i < DONE
            const isToday = i === TODAY
            return (
              <span
                key={i}
                className={`mx-auto h-2 w-2 rounded-full transition-colors md:h-2.5 md:w-2.5 ${
                  isDone
                    ? "bg-primary"
                    : isToday
                      ? "border border-primary bg-transparent"
                      : "border border-ink/20 bg-transparent"
                }`}
              />
            )
          })}
        </div>
        <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.2em] text-ink-muted">
          Dag 12 av 30
        </p>
      </div>
    </section>
  )
}
