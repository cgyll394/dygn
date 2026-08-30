// V2-only. DYGN:s ansikte utåt: Gunnar Lögdahl, fystränare för Eskilstuna GUIF.
// OBS: quote-texten nedan är ETT UTKAST — ersätt med Gunnars egna/godkända ord
// innan sidan görs publik. Byt även monogram-placeholdern mot hans foto
// (/people/gunnar.jpg) när filen finns.
export function AmbassadorQuote() {
  return (
    <section className="bg-card py-20 md:py-28" aria-label="Gunnar Lögdahl om DYGN">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          I samarbete med
        </p>
        <blockquote className="mx-auto mt-7 max-w-2xl font-fraunces text-2xl leading-[1.32] text-ink text-balance md:text-[2rem]">
          {"”Jag jobbar med spelare som ska prestera dag efter dag. Det svåra är sällan passet, det är att få grunden att sitta, varje dygn. DYGN gör just den biten enkel.”"}
        </blockquote>

        <figcaption className="mt-9 flex flex-col items-center gap-3.5">
          {/* Placeholder tills fotot finns — byt mot <Image src="/people/gunnar.jpg" ... /> */}
          <span
            aria-hidden
            className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary font-fraunces text-lg text-ink/60"
          >
            GL
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-ink">Gunnar Lögdahl</span>
            <span className="mt-0.5 block text-xs text-muted-foreground">Fystränare, Eskilstuna GUIF</span>
          </span>
        </figcaption>
      </div>
    </section>
  )
}
