"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"

const MESSAGES = [
  "Lansering hösten 2026. Förbeställ nu — 30 dagars öppet köp.",
  "Fri frakt och spara 20 % med prenumeration. Avsluta när som helst.",
  "En sachet, åtta näringsämnen. Klart på 30 sekunder.",
  "Tredjepartstestad. Tillverkad i EU enligt GMP.",
]

function RotatingBanner() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % MESSAGES.length), 4000)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="bg-primary px-4 py-2.5 text-center">
      <Link href="/#kop" className="block overflow-hidden">
        <span key={index} className="animate-usp block font-serif text-sm leading-snug text-primary-foreground">
          {MESSAGES[index]}
        </span>
      </Link>
    </div>
  )
}

export function SiteHeader() {
  const { cart, openCart } = useCart()
  const quantity = cart?.totalQuantity ?? 0

  return (
    <>
      <RotatingBanner />
      <div className="sticky top-2.5 z-40 px-2.5 md:top-3 md:px-5">
        <header className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-border/70 bg-card/95 py-2 pl-5 pr-2 shadow-[0_2px_20px_rgba(15,15,13,0.07)] backdrop-blur-md md:py-2.5 md:pl-7 md:pr-3">
          <nav aria-label="Huvudmeny" className="hidden items-center gap-7 md:flex">
            <Link
              href="/produkt"
              className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Produkten
            </Link>
            <Link
              href="/formulering"
              className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Formuleringen
            </Link>
            <Link
              href="/#faq"
              className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Frågor
            </Link>
          </nav>

          <Link href="/" aria-label="DYGN startsida" className="md:absolute md:left-1/2 md:-translate-x-1/2">
            <Image src="/brand/logo-dark.png" alt="DYGN" width={96} height={26} priority className="h-[22px] w-auto md:h-6" />
          </Link>

          <div className="flex items-center gap-1.5 md:gap-2.5">
            <Link
              href="/produkt"
              className="flex h-10 items-center rounded-full bg-primary px-4 text-xs font-semibold uppercase tracking-[0.1em] text-primary-foreground transition-colors hover:bg-foreground hover:text-background md:h-11 md:px-5"
            >
              Köp DYGN
            </Link>
            <button
              type="button"
              onClick={openCart}
              aria-label={`Öppna varukorg, ${quantity} varor`}
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary md:h-11 md:w-11"
            >
              <ShoppingBag className="h-5 w-5" />
              {quantity > 0 && (
                <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  {quantity}
                </span>
              )}
            </button>
          </div>
        </header>
      </div>
    </>
  )
}
