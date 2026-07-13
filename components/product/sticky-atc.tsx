"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
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

export function StickyAtc({
  variants,
  watchId,
  image,
}: {
  variants: ProductVariant[]
  watchId: string
  image: string
}) {
  const subscription = variants.find((v) => v.title.toLowerCase().includes("prenumeration"))
  const [selectedId, setSelectedId] = useState(subscription?.id ?? variants[0]?.id)
  const [visible, setVisible] = useState(false)
  const { addItem, isPending, isOpen } = useCart()

  useEffect(() => {
    const target = document.getElementById(watchId)
    if (!target) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0)
      },
      { threshold: 0 },
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [watchId])

  const selected = variants.find((v) => v.id === selectedId)
  if (!selected) return null

  return (
    <div
      aria-hidden={!visible || isOpen}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 backdrop-blur-md transition-transform duration-300 ${
        visible && !isOpen ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-5 py-3 md:gap-5 md:px-8">
        <div className="relative hidden h-12 w-12 shrink-0 overflow-hidden rounded-md bg-muted sm:block">
          <Image src={image || "/placeholder.svg"} alt="" fill sizes="48px" className="object-cover" />
        </div>
        <div className="hidden min-w-0 flex-col md:flex">
          <p className="truncate text-sm font-semibold">DYGN Daily Nutrition</p>
          <p className="text-xs text-muted-foreground">30 sachets. En om dagen.</p>
        </div>
        <div className="relative ml-auto">
          <select
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
            aria-label="Välj köpalternativ"
            className="h-12 appearance-none rounded-lg border border-border bg-background pl-4 pr-9 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {variants.map((v) => (
              <option key={v.id} value={v.id}>
                {`${v.title} — ${formatMoney(v.price.amount, v.price.currencyCode)}`}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
        </div>
        <button
          type="button"
          disabled={isPending || !selected.availableForSale}
          onClick={() => addItem(selected.id)}
          className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-foreground px-5 text-sm font-semibold uppercase tracking-[0.08em] text-background transition-colors hover:bg-primary hover:text-primary-foreground disabled:opacity-50 md:px-8"
        >
          {isPending ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
          <span className="hidden sm:inline">Lägg i varukorgen</span>
          <span className="sm:hidden">Köp</span>
          <span aria-hidden="true" className="hidden font-normal opacity-70 md:inline">
            {`— ${formatMoney(selected.price.amount, selected.price.currencyCode)}`}
          </span>
        </button>
      </div>
    </div>
  )
}
