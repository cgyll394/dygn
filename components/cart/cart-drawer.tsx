"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Minus, Plus, ShoppingBag, X } from "lucide-react"
import { useLang } from "@/components/lang-provider"
import { formatMoney } from "@/lib/format"
import { variantKind } from "@/lib/variants"
import { useCart } from "./cart-context"
import { COPY } from "./cart-drawer.copy"

export function CartDrawer() {
  const lang = useLang()
  const t = COPY[lang]
  const { cart, isOpen, closeCart, isPending, updateItem, removeItem } = useCart()

  useEffect(() => {
    if (!isOpen) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeCart()
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [isOpen, closeCart])

  function handleCheckout() {
    if (!cart?.checkoutUrl) return
    const url = new URL(cart.checkoutUrl)
    url.searchParams.set("channel", "online_store")
    if (window.self !== window.top) {
      window.open(url.toString(), "_blank", "noopener,noreferrer")
    } else {
      window.location.href = url.toString()
    }
  }

  if (!isOpen) return null

  const lines = cart?.lines.nodes ?? []

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label={t.title}>
      <button
        type="button"
        aria-label={t.closeCart}
        onClick={closeCart}
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
      />
      <div className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-card shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <h2 className="font-serif text-xl">{t.title}</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label={t.close}
            className="flex h-9 w-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            <p className="text-muted-foreground">{t.empty}</p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t.continueShopping}
            </button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-border overflow-y-auto px-6">
              {lines.map((line) => (
                <li key={line.id} className="flex gap-4 py-5">
                  <div className="relative h-24 w-20 shrink-0 overflow-hidden bg-muted">
                    {line.merchandise.image && (
                      <Image
                        src={line.merchandise.image.url || "/placeholder.svg"}
                        alt={line.merchandise.image.altText ?? line.merchandise.product.title}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="text-sm font-medium">{line.merchandise.product.title}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {t.variant[variantKind(line.merchandise.title)]}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-border">
                        <button
                          type="button"
                          disabled={isPending}
                          aria-label={t.decrease}
                          onClick={() =>
                            line.quantity <= 1 ? removeItem(line.id) : updateItem(line.id, line.quantity - 1)
                          }
                          className="flex h-8 w-8 items-center justify-center text-muted-foreground transition-colors hover:text-foreground disabled:opacity-50"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-8 text-center text-sm tabular-nums">{line.quantity}</span>
                        <button
                          type="button"
                          disabled={isPending}
                          aria-label={t.increase}
                          onClick={() => updateItem(line.id, line.quantity + 1)}
                          className="flex h-8 w-8 items-center justify-center text-muted-foreground transition-colors hover:text-foreground disabled:opacity-50"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="text-sm font-medium tabular-nums">
                        {formatMoney(
                          Number.parseFloat(line.merchandise.price.amount) * line.quantity,
                          line.merchandise.price.currencyCode,
                          lang,
                        )}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-border px-6 py-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{t.subtotal}</span>
                <span className="font-medium tabular-nums">
                  {cart &&
                    formatMoney(cart.cost.subtotalAmount.amount, cart.cost.subtotalAmount.currencyCode, lang)}
                </span>
              </div>
              <p className="mb-4 text-xs text-muted-foreground">{t.checkoutNote}</p>
              <button
                type="button"
                onClick={handleCheckout}
                disabled={isPending}
                className="w-full bg-primary py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {t.checkout}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
