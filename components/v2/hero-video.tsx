"use client"

import { useEffect, useRef } from "react"

// V2-hero-bakgrund: spelar automatiskt (muted/loop, inget ljud i filen).
// Native autoPlay-attribut används för tillförlitlig start; effekten backar
// upp den (vissa lägen kräver ett play()-anrop) och respekterar
// prefers-reduced-motion genom att pausa på första bildrutan (= stillbild).
export function HeroVideo({
  src = "/video/dygn-hero.mp4",
  className = "",
  objectPosition = "50% 50%",
}: {
  src?: string
  className?: string
  objectPosition?: string
}) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = ref.current
    if (!v) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.pause()
      v.currentTime = 0
      return
    }
    if (v.paused) v.play().catch(() => {})
  }, [])

  return (
    <video
      ref={ref}
      className={className}
      style={{ objectPosition }}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
