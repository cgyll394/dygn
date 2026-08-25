import Image from "next/image"
import Link from "next/link"

export function V2Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-10 md:flex-row md:justify-between md:px-10">
        <Image src="/brand/logo-dark.png" alt="DYGN" width={80} height={22} className="h-4 w-auto" />
        <nav className="flex items-center gap-6">
          {[
            { href: "/produkt", label: "Produkten" },
            { href: "/formulering", label: "Formuleringen" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-[11px] text-muted-foreground">
          {"Kosttillskott ersätter inte en varierad kost. © 2026 DYGN"}
        </p>
      </div>
    </footer>
  )
}
