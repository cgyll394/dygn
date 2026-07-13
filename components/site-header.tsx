"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"

export function SiteHeader() {
  const { cart, openCart } = useCart()
  const quantity = cart?.totalQuantity ?? 0

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <nav aria-label="Huvudmeny" className="hidden items-center gap-7 md:flex">
          <a
            href="#ingredienser"
            className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Formuleringen
          </a>
          <a
            href="#science"
            className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Vetenskapen
          </a>
          <a
            href="#faq"
            className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Frågor
          </a>
        </nav>

        <Link href="/" aria-label="DYGN startsida" className="md:absolute md:left-1/2 md:-translate-x-1/2">
          <Image src="/brand/logo-dark.png" alt="DYGN" width={96} height={26} priority className="h-6 w-auto" />
        </Link>

        <div className="flex items-center gap-4">
          <a
            href="#kop"
            className="hidden rounded-full bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-primary-foreground transition-colors hover:bg-foreground hover:text-background md:block"
          >
            Köp DYGN
          </a>
          <button
            type="button"
            onClick={openCart}
            aria-label={`Öppna varukorg, ${quantity} varor`}
            className="relative flex h-9 w-9 items-center justify-center text-foreground transition-opacity hover:opacity-70"
          >
            <ShoppingBag className="h-5 w-5" />
            {quantity > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                {quantity}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
