import type { Lang } from "@/lib/i18n"

const sv = {
  eyebrow: "Vad du kan förvänta dig",
  heading: "Ärliga förväntningar.",
  intro: "Vissa delar kan märkas. Det mesta arbetar tyst och långsiktigt. Så här ser det ut.",
  items: [
    {
      title: "Det du inte känner",
      body: "D-vitamin, K2, folat och jod arbetar i bakgrunden. Deras jobb syns i blodprov och på lång sikt, inte i hur dagen känns. Mår du redan bra är det precis som det ska vara.",
    },
    {
      title: "Det du kan märka",
      body: "Tränar och svettas du mycket kan elektrolyterna, kalium och magnesium, märkas snabbt, ofta redan samma dag. Ligger du lågt i magnesium kan sömnen bli bättre efter några veckor, och vid B12-brist kan energin lyfta.",
    },
    {
      title: "Så följer du effekten",
      body: "Vill du veta säkert går det att mäta: ta gärna blodprov före och efter tre månader, till exempel D-vitamin och homocystein. Annars räcker det långt att rutinen känns lätt att hålla.",
    },
  ],
}

const en: typeof sv = {
  eyebrow: "What you can expect",
  heading: "Honest expectations.",
  intro: "Some things can be felt. Most of it works quietly and over the long term. Here’s how it looks.",
  items: [
    {
      title: "What you don’t feel",
      body: "Vitamin D, K2, folate and iodine work in the background. Their job shows up in blood tests and over the long term, not in how the day feels. If you already feel good, that is exactly as it should be.",
    },
    {
      title: "What you may notice",
      body: "If you train and sweat a lot, the electrolytes, potassium and magnesium, can be noticed quickly, often the same day. If you’re low in magnesium, sleep can improve after a few weeks, and with a B12 deficiency your energy can lift.",
    },
    {
      title: "How to track the effect",
      body: "If you want to know for sure, it can be measured: take a blood test before and after three months, for example vitamin D and homocysteine. Otherwise, a routine that feels easy to keep goes a long way.",
    },
  ],
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
