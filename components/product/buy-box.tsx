"use client"

import { useState } from "react"
import { Check, Loader2, RotateCcw, Truck, ShieldCheck } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"
import type { ProductVariant } from "@/lib/shopify"

function formatMoney(amount: string, currencyCode: string) {
  return new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: currencyCode,
    maximumFractionDigits: 0,
  }).format(Number.parseFloat(amount))
}

export function BuyBox({ variants }: { variants: ProductVariant[] }) {
  const subscription = variants.find((v) => v.title.toLowerCase().includes("prenumeration"))
  const oneTime = variants.find((v) => !v.title.toLowerCase().includes("prenumeration"))
  const [selectedId, setSelectedId] = useState(subscription?.id ?? variants[0]?.id)
  const { addItem, isPending } = useCart()

  const selected = variants.find((v) => v.id === selectedId)
  if (!selected) return null

  const savings =
    subscription?.compareAtPrice && subscription.price
      ? Math.round(
          (1 -
            Number.parseFloat(subscription.price.amount) /
              Number.parseFloat(subscription.compareAtPrice.amount)) *
            100,
        )
      : 0

  const options = [
    subscription && {
      variant: subscription,
      label: "Prenumerera & spara",
      sublabel: "Levereras var 30:e dag. Pausa eller avsluta när du vill.",
      badge: savings > 0 ? `Spara ${savings}%` : null,
      perDay: (Number.parseFloat(subscription.price.amount) / 30).toFixed(0),
    },
    oneTime && {
      variant: oneTime,
      label: "Engångsköp",
      sublabel: "En förpackning. 30 dagar.",
      badge: null,
      perDay: (Number.parseFloat(oneTime.price.amount) / 30).toFixed(0),
    },
  ].filter(Boolean) as {
    variant: ProductVariant
    label: string
    sublabel: string
    badge: string | null
    perDay: string
  }[]

  return (
    <div className="flex flex-col gap-5">
      <fieldset className="flex flex-col gap-3">
        <legend className="sr-only">Välj köpalternativ</legend>
        {options.map(({ variant, label, sublabel, badge, perDay }) => {
          const isSelected = variant.id === selectedId
          return (
            <label
              key={variant.id}
              className={`relative flex cursor-pointer items-start gap-4 border p-4 transition-colors ${
                isSelected ? "border-primary bg-card" : "border-border bg-transparent hover:border-foreground/30"
              }`}
            >
              <input
                type="radio"
                name="purchase-option"
                value={variant.id}
                checked={isSelected}
                onChange={() => setSelectedId(variant.id)}
                className="sr-only"
              />
              <span
                aria-hidden="true"
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                  isSelected ? "border-primary bg-primary" : "border-border"
                }`}
              >
                {isSelected && <Check className="h-3 w-3 text-primary-foreground" />}
              </span>
              <span className="flex flex-1 flex-col gap-0.5">
                <span className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium">{label}</span>
                  {badge && (
                    <span className="bg-primary px-2 py-0.5 text-[11px] font-medium text-primary-foreground">
                      {badge}
                    </span>
                  )}
                </span>
                <span className="text-xs leading-relaxed text-muted-foreground">{sublabel}</span>
                <span className="mt-1 flex items-baseline gap-2">
                  <span className="font-serif text-lg">{formatMoney(variant.price.amount, variant.price.currencyCode)}</span>
                  {variant.compareAtPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {formatMoney(variant.compareAtPrice.amount, variant.compareAtPrice.currencyCode)}
                    </span>
                  )}
                  <span className="text-xs text-muted-foreground">{`≈ ${perDay} kr/dag`}</span>
                </span>
              </span>
            </label>
          )
        })}
      </fieldset>

      <button
        type="button"
        disabled={isPending || !selected.availableForSale}
        onClick={() => addItem(selected.id)}
        className="flex w-full items-center justify-center gap-2 bg-primary py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {selected.availableForSale ? "Lägg i varukorgen" : "Slutsåld"}
      </button>

      <ul className="flex flex-col gap-2.5 border-t border-border pt-5">
        <li className="flex items-center gap-2.5 text-xs text-muted-foreground">
          <Truck className="h-4 w-4 shrink-0 text-foreground" aria-hidden="true" />
          {"Fri frakt över 500 kr — levereras inom 2–4 vardagar"}
        </li>
        <li className="flex items-center gap-2.5 text-xs text-muted-foreground">
          <RotateCcw className="h-4 w-4 shrink-0 text-foreground" aria-hidden="true" />
          {"30 dagars öppet köp, även på öppnade förpackningar"}
        </li>
        <li className="flex items-center gap-2.5 text-xs text-muted-foreground">
          <ShieldCheck className="h-4 w-4 shrink-0 text-foreground" aria-hidden="true" />
          {"Tredjepartstestad. Tillverkad i EU enligt GMP"}
        </li>
      </ul>
    </div>
  )
}
