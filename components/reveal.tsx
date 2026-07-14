"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

type Phase = "ssr" | "hidden" | "in"

/**
 * Scroll-reveal wrapper. Server-rendered fully visible (no-JS safe); on mount
 * it hides, then fades/slides in — immediately (staggered by `delay`) if
 * already in view, otherwise the first time it scrolls into view. The show is
 * scheduled via rAF with a timeout fallback so throttled/occluded contexts
 * still render. `prefers-reduced-motion` is handled in CSS.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [phase, setPhase] = useState<Phase>("ssr")

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let done = false
    let raf = 0
    let timer: ReturnType<typeof setTimeout> | undefined

    function inView() {
      const rect = el!.getBoundingClientRect()
      return rect.top < window.innerHeight * 0.92 && rect.bottom > 0
    }
    function cleanup() {
      window.removeEventListener("scroll", check)
      window.removeEventListener("resize", check)
      if (raf) cancelAnimationFrame(raf)
      if (timer) clearTimeout(timer)
    }
    function show() {
      if (done) return
      done = true
      window.removeEventListener("scroll", check)
      window.removeEventListener("resize", check)
      // Let the hidden state commit first so the transition runs; fall back to
      // a timer where rAF is throttled.
      raf = requestAnimationFrame(() => {
        raf = requestAnimationFrame(() => setPhase("in"))
      })
      timer = setTimeout(() => setPhase("in"), 180)
    }
    function check() {
      if (!done && inView()) show()
    }

    setPhase("hidden")
    if (inView()) {
      show()
    } else {
      window.addEventListener("scroll", check, { passive: true })
      window.addEventListener("resize", check)
    }
    return cleanup
  }, [])

  return (
    <div
      ref={ref}
      className={`${phase === "ssr" ? "" : "reveal"} ${phase === "in" ? "is-in" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
