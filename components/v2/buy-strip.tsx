import Link from "next/link"

export function BuyStrip() {
  return (
    <section className="bg-background py-24 md:py-32" aria-labelledby="buy-v2-heading">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 id="buy-v2-heading" className="font-fraunces text-4xl leading-tight text-ink text-balance md:text-6xl">
          {"10 kr om dygnet"}
          <span className="text-primary">.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
          299 kr i månaden med prenumeration. Fri frakt. Pausa eller avsluta när du vill.
        </p>
        <Link
          href="/produkt"
          className="mt-9 inline-block rounded-full bg-primary px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-ink hover:text-ink-foreground"
        >
          Förbeställ DYGN
        </Link>
      </div>
    </section>
  )
}
