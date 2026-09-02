import type { Lang } from "@/lib/i18n"

// OBS: citatet är ETT UTKAST — ersätt med Gunnars egna/godkända ord (på båda
// språken) innan sidan görs publik.
const sv = {
  sectionLabel: "Gunnar Lögdahl om DYGN",
  quote:
    "”Jag jobbar med spelare som ska prestera dag efter dag. Det svåra är sällan passet, det är att få grunden att sitta, varje dag. DYGN gör just den biten enkel.”",
  imageAlt: "Gunnar Lögdahl",
  name: "Gunnar Lögdahl",
  role: "Fystränare, Eskilstuna GUIF",
  merit: "5× svensk mästare i tyngdlyftning",
}

const en: typeof sv = {
  sectionLabel: "Gunnar Lögdahl on DYGN",
  quote:
    "“I work with players who have to perform day after day. The hard part is rarely the session — it’s getting the basics right, every day. DYGN makes that part simple.”",
  imageAlt: "Gunnar Lögdahl",
  name: "Gunnar Lögdahl",
  role: "Strength & conditioning coach, Eskilstuna GUIF",
  merit: "5× Swedish weightlifting champion",
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
