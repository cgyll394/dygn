"use client"

import { useEffect, useState } from "react"

// 30 prickar = en månad. Fylls i orange en och en, håller när allt är fyllt,
// laddar sedan om från 0 och loopar. Statisk (11 fyllda) vid reducerad rörelse.
export function DayDotsRow({ total = 30, className = "" }: { total?: number; className?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(11)
      return
    }
    let n = 0
    let timer: ReturnType<typeof setTimeout>
    const tick = () => {
      setCount(n)
      const atFull = n >= total
      const delay = atFull ? 1600 : 230
      n = atFull ? 0 : n + 1
      timer = setTimeout(tick, delay)
    }
    tick()
    return () => clearTimeout(timer)
  }, [total])

  return (
    <div className={`items-center gap-1.5 ${className}`} aria-hidden>
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`h-1 w-1 rounded-full transition-colors duration-300 ${
            i < count ? "bg-primary" : "bg-current opacity-25"
          }`}
        />
      ))}
    </div>
  )
}
