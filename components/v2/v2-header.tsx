import Image from "next/image"
import Link from "next/link"

export function V2Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-10">
        <Link href="/v2" aria-label="DYGN">
          <Image src="/brand/logo-dark.png" alt="DYGN" width={90} height={25} priority className="h-[18px] w-auto" />
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/formulering"
            className="hidden text-xs font-medium uppercase tracking-[0.14em] text-ink/60 transition-colors hover:text-ink sm:block"
          >
            Formuleringen
          </Link>
          <Link
            href="/produkt"
            className="rounded-full border border-ink/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-ink hover:text-ink-foreground"
          >
            Förbeställ
          </Link>
        </nav>
      </div>
    </header>
  )
}
