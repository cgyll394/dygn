"use client"

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"
import { Zap, Shield, Bone, Droplets } from "lucide-react"
import { useLang } from "@/components/lang-provider"
import { COPY } from "./wild-benefits.copy"

// V2-only. "DYGN in the wild" + fördelarna i EN sektion. Desktop: fördelar
// till vänster, flashande fisheye-bild till höger. Mobil: allt centrerat.
const COUNT = 10
const V = "3"
const IMAGES = Array.from({ length: COUNT }, (_, i) => `/lifestyle/wild/${String(i + 1).padStart(2, "0")}.jpg?v=${V}`)

// Texterna ligger i wild-benefits.copy.ts (benefits), i samma ordning som ikonerna här.
const BENEFIT_ICONS = [Zap, Shield, Bone, Droplets]

export function WildBenefits() {
  const lang = useLang()
  const t = COPY[lang]
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = setInterval(() => setIdx((i) => (i + 1) % COUNT), 420)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="bg-background pb-24 pt-16 md:py-36" aria-labelledby="wild-benefits-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:gap-20 md:px-8">
        {/* Fördelar — vänster på desktop, under bilden på mobil */}
        <div className="order-2 md:order-1">
          <h2
            id="wild-benefits-heading"
            className="text-center font-fraunces text-3xl leading-tight text-ink text-balance md:text-left md:text-6xl"
          >
            {t.heading}
          </h2>
          <ul className="mt-8 flex flex-col gap-8 md:mt-12 md:gap-8">
            {t.benefits.map(({ title, text }, i) => {
              const Icon = BENEFIT_ICONS[i]
              return (
                <li
                  key={title}
                  className="flex flex-col items-center gap-3 text-center md:flex-row md:items-start md:gap-5 md:text-left"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-card md:mt-0.5 md:h-12 md:w-12">
                    <Icon className="h-5 w-5 text-primary md:h-6 md:w-6" strokeWidth={1.5} aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-foreground md:text-lg">{title}</span>
                    <span className="mt-0.5 block text-sm leading-relaxed text-muted-foreground md:mt-1 md:text-base">{text}</span>
                  </span>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Bild — höger på desktop, överst på mobil */}
        <div className="order-1 mx-auto w-full max-w-[340px] md:order-2 md:ml-auto md:mr-0 md:max-w-[480px]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            {IMAGES.map((src, i) => (
              <img
                key={src}
                src={src}
                alt=""
                aria-hidden
                className={`absolute inset-0 h-full w-full object-cover ${i === idx ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
