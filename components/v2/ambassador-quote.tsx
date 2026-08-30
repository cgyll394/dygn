import Image from "next/image"

// V2-only. DYGN:s ansikte utåt: Gunnar Lögdahl, fystränare för Eskilstuna GUIF.
// OBS: quote-texten nedan är ETT UTKAST — ersätt med Gunnars egna/godkända ord
// innan sidan görs publik.
export function AmbassadorQuote() {
  return (
    <section className="bg-card py-20 md:py-28" aria-label="Gunnar Lögdahl om DYGN">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <blockquote className="mx-auto max-w-2xl font-fraunces text-2xl leading-[1.32] text-ink text-balance md:text-[2rem]">
          {"”Jag jobbar med spelare som ska prestera dag efter dag. Det svåra är sällan passet, det är att få grunden att sitta, varje dygn. DYGN gör just den biten enkel.”"}
        </blockquote>

        <figcaption className="mt-9 flex flex-col items-center gap-3.5">
          <Image
            src="/people/gunnar.jpg"
            alt="Gunnar Lögdahl"
            width={72}
            height={72}
            className="h-[72px] w-[72px] rounded-full object-cover"
          />
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-ink">Gunnar Lögdahl</span>
            <span className="mt-0.5 block text-xs text-muted-foreground">Fystränare, Eskilstuna GUIF</span>
            <span className="mt-1.5 block text-[11px] font-medium uppercase tracking-[0.12em] text-primary">
              5× svensk mästare i tyngdlyftning
            </span>
          </span>
        </figcaption>
      </div>
    </section>
  )
}
