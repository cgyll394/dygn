"use client"

import { Loader2 } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"
import { useLang } from "@/components/lang-provider"
import { formatMoney } from "@/lib/format"
import type { ProductVariant } from "@/lib/shopify"
import { findVariant, savingsPercent } from "@/lib/variants"
import { COPY } from "./sticky-atc.copy"

/**
 * Cadence-style purchase bar: visible from page load, subscription as the
 * primary CTA, one-time purchase as a quiet text link underneath.
 */
export function StickyAtc({ variants }: { variants: ProductVariant[] }) {
  const lang = useLang()
  const t = COPY[lang]
  const { addItem, isPending, isOpen } = useCart()

  const subscription = findVariant(variants, "subscription")
  const oneTime = findVariant(variants, "oneTime")
  const primary = subscription ?? variants[0]
  if (!primary) return null

  const save = savingsPercent(subscription)

  return (
    <div
      aria-hidden={isOpen}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 backdrop-blur-md transition-transform duration-300 ${
        isOpen ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="pb-safe mx-auto max-w-6xl px-4 pb-3 pt-2.5 md:px-8">
        <p className="pb-1.5 text-center text-xs text-muted-foreground md:hidden">{t.mobileTitle}</p>
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden min-w-0 flex-col md:flex">
            <p className="truncate text-sm font-semibold">{t.title}</p>
            <p className="text-xs text-muted-foreground">{t.subtitle}</p>
          </div>
          <div className="flex flex-1 flex-col items-center gap-1.5 md:ml-auto md:max-w-md">
            <button
              type="button"
              disabled={isPending || !primary.availableForSale}
              onClick={() => addItem(primary.id)}
              className="flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold uppercase tracking-[0.08em] text-background transition-colors hover:bg-primary hover:text-primary-foreground disabled:opacity-50"
            >
              {isPending ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
              {subscription
                ? t.subscribe(save, formatMoney(primary.price.amount, primary.price.currencyCode, lang))
                : t.addToCart(formatMoney(primary.price.amount, primary.price.currencyCode, lang))}
            </button>
            {subscription && oneTime && (
              <button
                type="button"
                disabled={isPending || !oneTime.availableForSale}
                onClick={() => addItem(oneTime.id)}
                className="min-h-[32px] text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground disabled:opacity-50"
              >
                {t.oneTime(formatMoney(oneTime.price.amount, oneTime.price.currencyCode, lang))}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
