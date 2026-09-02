import type { Lang } from "@/lib/i18n"
import { COPY } from "./benefit-marquee.copy"

// V2-only. Scrollande band av korta fördelar — snabb, scannbar "vad är det bra för".
export function BenefitMarquee({ lang }: { lang: Lang }) {
  const t = COPY[lang]
  const loops = [0, 1]
  return (
    <div className="overflow-hidden border-y border-border bg-secondary py-4" aria-hidden>
      <div className="flex w-max animate-marquee items-center">
        {loops.map((loop) => (
          <div key={loop} className="flex items-center">
            {t.items.map((item, i) => (
              <span key={`${loop}-${i}`} className="flex items-center">
                <span className="mx-2.5 whitespace-nowrap rounded-full border border-ink/15 bg-card/60 px-4 py-1.5 text-xs font-medium text-ink/80">
                  {item}
                </span>
                <span className="text-ink/25">&rarr;</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
