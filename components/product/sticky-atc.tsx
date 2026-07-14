"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Loader2 } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"
import type { ProductVariant } from "@/lib/shopify"

function formatMoney(amount: string, currencyCode: string) {
  return new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: currencyCode,
    maximumFractionDigits: 0,
  }).format(Number.parseFloat(amount))
}

export function StickyAtc({ variants, watchId }: { variants: ProductVariant[]; watchId: string }) {
  const subscription = variants.find((v) => v.title.toLowerCase().includes("prenumeration"))
  const [selectedId, setSelectedId] = useState(subscription?.id ?? variants[0]?.id)
  const [visible, setVisible] = useState(false)
  const { addItem, isPending, isOpen } = useCart()

  useEffect(() => {
    const target = document.getElementById(watchId)
    if (!target) return
    function onScroll() {
      setVisible(target!.getBoundingClientRect().bottom < 0)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [watchId])

  const selected = variants.find((v) => v.id === selectedId)
  if (!selected) return null

  return (
    <div
      aria-hidden={!visible || isOpen}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md transition-transform duration-500 [transition-timing-function:cubic-bezier(.22,1,.36,1)] ${
        visible && !isOpen ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3 md:gap-6 md:px-8">
        <p className="hidden min-w-0 truncate font-serif text-lg md:block">DYGN Daily Nutrition</p>
        <div className="relative ml-auto">
          <select
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
            aria-label="Välj köpalternativ"
            className="h-11 appearance-none border-b border-input bg-transparent pl-1 pr-8 text-sm focus:border-foreground focus:outline-none"
          >
            {variants.map((v) => (
              <option key={v.id} value={v.id}>
                {`${v.title} — ${formatMoney(v.price.amount, v.price.currencyCode)}`}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
        </div>
        <button
          type="button"
          disabled={isPending || !selected.availableForSale}
          onClick={() => addItem(selected.id)}
          className="btn h-11 shrink-0 bg-primary px-6 text-primary-foreground hover:bg-foreground hover:text-background disabled:opacity-50 md:px-8"
        >
          {isPending ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
          <span className="hidden sm:inline">Lägg i varukorgen</span>
          <span className="sm:hidden">Köp</span>
        </button>
      </div>
    </div>
  )
}
