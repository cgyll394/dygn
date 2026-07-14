"use client"

import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/components/cart/cart-context"

export function SiteHeader() {
  const { cart, openCart } = useCart()
  const quantity = cart?.totalQuantity ?? 0

  return (
    <>
      <div className="bg-ink px-4 py-2 text-center">
        <Link
          href="/produkt"
          className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-foreground/80 transition-colors duration-300 hover:text-ink-foreground"
        >
          {"Lansering hösten 2026 — förbeställ nu. 30 dagars öppet köp."}
        </Link>
      </div>
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 md:px-8">
          <nav aria-label="Huvudmeny" className="hidden items-center gap-8 md:flex">
            <Link
              href="/produkt"
              className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              Produkten
            </Link>
            <Link
              href="/#formula"
              className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              Formuleringen
            </Link>
            <Link
              href="/#faq"
              className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              Frågor
            </Link>
          </nav>

          <Link href="/" aria-label="DYGN startsida" className="md:absolute md:left-1/2 md:-translate-x-1/2">
            <Image src="/brand/logo-dark.png" alt="DYGN" width={96} height={26} priority className="h-[22px] w-auto" />
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/produkt"
              className="btn hidden h-9 bg-foreground px-5 text-background hover:bg-primary hover:text-primary-foreground md:inline-flex"
            >
              Förbeställ
            </Link>
            <button
              type="button"
              onClick={openCart}
              aria-label={`Öppna varukorg, ${quantity} varor`}
              className="text-[11px] font-medium uppercase tracking-[0.16em] text-foreground transition-opacity duration-300 hover:opacity-60"
            >
              Varukorg
              <span className="ml-1.5 tabular-nums text-muted-foreground">({quantity})</span>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
