"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Minus, Plus, X } from "lucide-react"
import { useCart } from "./cart-context"

function formatMoney(amount: string, currencyCode: string) {
  const value = Number.parseFloat(amount)
  return new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: currencyCode,
    maximumFractionDigits: 0,
  }).format(value)
}

export function CartDrawer() {
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
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Varukorg">
      <button
        type="button"
        aria-label="Stäng varukorg"
        onClick={closeCart}
        className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]"
      />
      <div className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-background shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <h2 className="type-subtitle">Varukorg</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Stäng"
            className="flex h-9 w-9 items-center justify-center text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 text-center">
            <p className="text-sm text-muted-foreground">{"Din varukorg är tom."}</p>
            <button
              type="button"
              onClick={closeCart}
              className="btn h-11 border border-foreground/20 px-6 text-foreground hover:border-foreground"
            >
              {"Fortsätt handla"}
            </button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-border overflow-y-auto px-6">
              {lines.map((line) => (
                <li key={line.id} className="flex gap-5 py-6">
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
                      <p className="mt-0.5 text-xs text-muted-foreground">{line.merchandise.title}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-border">
                        <button
                          type="button"
                          disabled={isPending}
                          aria-label="Minska antal"
                          onClick={() =>
                            line.quantity <= 1 ? removeItem(line.id) : updateItem(line.id, line.quantity - 1)
                          }
                          className="flex h-8 w-8 items-center justify-center text-muted-foreground transition-colors duration-300 hover:text-foreground disabled:opacity-50"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-8 text-center text-sm tabular-nums">{line.quantity}</span>
                        <button
                          type="button"
                          disabled={isPending}
                          aria-label="Öka antal"
                          onClick={() => updateItem(line.id, line.quantity + 1)}
                          className="flex h-8 w-8 items-center justify-center text-muted-foreground transition-colors duration-300 hover:text-foreground disabled:opacity-50"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="text-sm tabular-nums">
                        {formatMoney(
                          (Number.parseFloat(line.merchandise.price.amount) * line.quantity).toString(),
                          line.merchandise.price.currencyCode,
                        )}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-border px-6 py-6">
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-muted-foreground">Delsumma</span>
                <span className="font-serif text-xl tabular-nums">
                  {cart && formatMoney(cart.cost.subtotalAmount.amount, cart.cost.subtotalAmount.currencyCode)}
                </span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                {"Frakt och eventuella rabatter beräknas i kassan."}
              </p>
              <button
                type="button"
                onClick={handleCheckout}
                disabled={isPending}
                className="btn mt-5 h-14 w-full bg-primary text-primary-foreground hover:bg-foreground hover:text-background disabled:opacity-50"
              >
                {"Till kassan"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
