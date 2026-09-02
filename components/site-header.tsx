"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"
import { useLang } from "@/components/lang-provider"
import { LangSwitch } from "@/components/lang-switch"
import { localePath } from "@/lib/i18n"
import { COPY } from "./site-header.copy"

function RotatingBanner({ messages, href }: { messages: string[]; href: string }) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % messages.length), 4000)
    return () => clearInterval(id)
  }, [messages.length])
  return (
    <div className="announcement-banner relative z-30 flex items-center justify-center bg-primary px-4 py-3.5 text-center">
      <Link href={href} className="block">
        <span key={index} className="animate-usp block whitespace-nowrap text-[13px] font-medium leading-none text-primary-foreground">
          {messages[index]}
        </span>
      </Link>
    </div>
  )
}

export function SiteHeader() {
  const { cart, openCart } = useCart()
  const lang = useLang()
  const t = COPY[lang]
  const quantity = cart?.totalQuantity ?? 0

  return (
    <>
      <RotatingBanner messages={t.banner} href={localePath(lang, "/#kop")} />
      <div className="nav-shell sticky top-2.5 z-40 mt-2.5 px-2.5 md:top-3 md:mt-3 md:px-5">
        <header className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-border/70 bg-card/95 py-2 pl-5 pr-2 shadow-[0_2px_20px_rgba(15,15,13,0.07)] backdrop-blur-md md:py-2.5 md:pl-7 md:pr-3">
          <nav aria-label={t.menu} className="hidden items-center gap-7 md:flex">
            <Link
              href={localePath(lang, "/produkt")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.product}
            </Link>
            <Link
              href={localePath(lang, "/formulering")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.formula}
            </Link>
            <Link
              href={localePath(lang, "/#faq")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.faq}
            </Link>
          </nav>

          <Link href={localePath(lang, "/")} aria-label={t.home} className="md:absolute md:left-1/2 md:-translate-x-1/2">
            <Image src="/brand/logo-dark.png" alt="DYGN" width={96} height={26} priority className="h-[22px] w-auto md:h-6" />
          </Link>

          <div className="flex items-center gap-1.5 md:gap-2.5">
            <LangSwitch className="px-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground md:px-2.5" />
            <Link
              href={localePath(lang, "/produkt")}
              className="flex h-10 items-center rounded-full bg-primary px-4 text-xs font-semibold uppercase tracking-[0.1em] text-primary-foreground transition-colors hover:bg-foreground hover:text-background md:h-11 md:px-5"
            >
              {t.buy}
            </Link>
            <button
              type="button"
              onClick={openCart}
              aria-label={t.cart(quantity)}
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
