import Image from "next/image"
import type { Lang } from "@/lib/i18n"
import { COPY } from "./how-to-use.copy"

export function HowToUse({ lang }: { lang: Lang }) {
  const t = COPY[lang]

  return (
    <section className="border-y border-border bg-background" aria-labelledby="how-to-use-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:px-8 md:py-24">
        <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-lg md:order-1">
          <Image
            src="/lifestyle/hero-fisheye.jpg"
            alt={t.imageAlt}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{t.eyebrow}</p>
          <h2 id="how-to-use-heading" className="mt-3 font-serif text-3xl text-foreground text-balance md:text-4xl">
            {t.heading}
          </h2>
          <ol className="mt-8 flex flex-col gap-6">
            {t.steps.map((step) => (
              <li key={step.number} className="flex gap-5">
                <span className="font-serif text-xl text-primary" aria-hidden>
                  {step.number}
                </span>
                <div>
                  <h3 className="text-lg font-medium text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
