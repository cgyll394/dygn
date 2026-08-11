import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-ink px-5 text-center">
      <Image src="/brand/logo-light.png" alt="DYGN" width={96} height={27} priority className="h-6 w-auto" />
      <p className="mt-10 text-xs font-medium uppercase tracking-[0.22em] text-ink-muted">404</p>
      <h1 className="mt-3 font-fraunces text-4xl text-ink-foreground text-balance md:text-5xl">
        Sidan finns inte.
      </h1>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-foreground/70">
        Länken kan vara gammal eller felstavad. Det viktigaste hittar du härifrån.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex min-h-[48px] items-center rounded-full bg-primary px-7 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
        >
          Till startsidan
        </Link>
        <Link
          href="/produkt"
          className="inline-flex min-h-[48px] items-center rounded-full border border-ink-foreground/40 px-7 text-sm font-semibold uppercase tracking-[0.08em] text-ink-foreground transition-colors hover:bg-ink-foreground/10"
        >
          Se produkten
        </Link>
      </div>
    </main>
  )
}
