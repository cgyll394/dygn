"use client"

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"

// V2-only. "DYGN in the wild" — bilderna flashar förbi bild för bild (ingen scroll)
// i en ram på höger sida. Mörk botten gör att fisheye-vinjetten flyter.
const COUNT = 12
const IMAGES = Array.from({ length: COUNT }, (_, i) => `/lifestyle/wild/${String(i + 1).padStart(2, "0")}.jpg`)

export function WildGallery() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = setInterval(() => setIdx((i) => (i + 1) % COUNT), 450)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="bg-ink py-16 text-ink-foreground md:py-24" aria-label="DYGN i verkligheten">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <div className="text-center md:text-left">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-primary">DYGN in the wild</p>
          <h2 className="mx-auto mt-4 max-w-md font-fraunces text-3xl leading-tight text-balance md:mx-0 md:text-5xl">
            En sachet. Överallt du är.
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-ink-foreground/70 md:mx-0">
            Från löprundan till köksbänken till kontoret. Samma 30 sekunder, var du än är.
          </p>
        </div>

        <div className="mx-auto w-full max-w-[340px] md:ml-auto md:mr-0 md:max-w-[380px]">
          <div className="relative aspect-[4/5] w-full">
            {IMAGES.map((src, i) => (
              <img
                key={src}
                src={src}
                alt=""
                aria-hidden
                className={`absolute inset-0 h-full w-full rounded-xl object-cover transition-opacity duration-150 ${
                  i === idx ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
