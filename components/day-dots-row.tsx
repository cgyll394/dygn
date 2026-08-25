// 30 prickar, en per dag i asken. Elva ifyllda i orange, resten dämpade
// i omgivningens textfärg. Display styrs av klasserna som skickas in:
// i v2-scopade ytor används "v2-dots" (dold i v1, flex i v2).
export function DayDotsRow({ filled = 11, className = "" }: { filled?: number; className?: string }) {
  return (
    <div className={`items-center gap-1.5 ${className}`} aria-hidden>
      {Array.from({ length: 30 }).map((_, i) => (
        <span
          key={i}
          className={`h-1 w-1 rounded-full ${i < filled ? "bg-primary/90" : "bg-current opacity-30"}`}
        />
      ))}
    </div>
  )
}
