"use client"

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"

// V2-only. "DYGN in the wild" — bilderna flashar förbi bild för bild, hård
// klippning (ingen övergång), på ljus bakgrund. Cirkelmaskad = ren fisheye-lins.
const COUNT = 10
const IMAGES = Array.from({ length: COUNT }, (_, i) => `/lifestyle/wild/${String(i + 1).padStart(2, "0")}.jpg`)

export function WildGallery() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = setInterval(() => setIdx((i) => (i + 1) % COUNT), 250)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="bg-background py-16 md:py-24" aria-label="DYGN i verkligheten">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <div className="text-center md:text-left">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-primary">DYGN in the wild</p>
          <h2 className="mt-4 font-fraunces text-3xl leading-tight text-ink text-balance md:text-5xl">
            Överallt du är.
          </h2>
        </div>

        <div className="mx-auto w-full max-w-[320px] md:ml-auto md:mr-0 md:max-w-[360px]">
          <div className="relative aspect-square w-full overflow-hidden rounded-full">
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
