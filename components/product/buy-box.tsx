"use client"

import { useState } from "react"
import { Check, Loader2, Lock, RotateCcw, Truck, ShieldCheck } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"
import { PaymentBadges } from "@/components/payment-badges"
import type { ProductVariant } from "@/lib/shopify"

function formatMoney(amount: string, currencyCode: string) {
  return new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: currencyCode,
    maximumFractionDigits: 0,
  }).format(Number.parseFloat(amount))
}

function perDay(amount: string, currencyCode: string, servings: number) {
  return formatMoney((Number.parseFloat(amount) / servings).toString(), currencyCode)
}

type Option = {
  variant: ProductVariant
  label: string
  badge: string | null
  pickBadge: string | null
  servings: number
  note: string
  perks: string[]
}

export function BuyBox({ variants }: { variants: ProductVariant[] }) {
  const subscription = variants.find((v) => v.title.toLowerCase().includes("prenumeration"))
  const threePack = variants.find((v) => v.title.toLowerCase().includes("3-pack"))
  const oneTime = variants.find(
    (v) => !v.title.toLowerCase().includes("prenumeration") && !v.title.toLowerCase().includes("3-pack"),
  )
  const [selectedId, setSelectedId] = useState(subscription?.id ?? variants[0]?.id)
  const { addItem, isPending } = useCart()

  const selected = variants.find((v) => v.id === selectedId)
  if (!selected) return null

  function savings(v?: ProductVariant) {
    if (!v?.compareAtPrice) return 0
    return Math.round(
      (1 - Number.parseFloat(v.price.amount) / Number.parseFloat(v.compareAtPrice.amount)) * 100,
    )
  }

  const options = [
    subscription && {
      variant: subscription,
      label: "Prenumeration",
      badge: savings(subscription) > 0 ? `Spara ${savings(subscription)}%` : null,
      pickBadge: "De flesta väljer denna",
      servings: 30,
      note: "30 sachets var 30:e dag",
      perks: ["Alltid fri frakt", "Pausa, hoppa över eller avsluta när som helst"],
    },
    threePack && {
      variant: threePack,
      label: "3-pack",
      badge: savings(threePack) > 0 ? `Spara ${savings(threePack)}%` : null,
      pickBadge: null,
      servings: 90,
      note: "90 sachets, en leverans",
      perks: ["Fri frakt ingår"],
    },
    oneTime && {
      variant: oneTime,
      label: "Engångsköp",
      badge: null,
      pickBadge: null,
      servings: 30,
      note: "30 sachets · frakt 50 kr tillkommer",
      perks: [],
    },
  ].filter(Boolean) as Option[]

  return (
    <div className="flex flex-col gap-5">
      <fieldset className="flex flex-col gap-3">
        <legend className="mb-5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          Välj ditt sätt att köpa
        </legend>
        {options.map(({ variant, label, badge, pickBadge, servings: srv, note, perks }) => {
          const isSelected = variant.id === selectedId
          return (
            <label
              key={variant.id}
              className={`relative flex cursor-pointer flex-col rounded-lg border-2 p-4 transition-all ${
                isSelected
                  ? "border-foreground bg-card shadow-[0_2px_16px_rgba(15,15,13,0.08)]"
                  : "border-border bg-transparent hover:border-foreground/40"
              }`}
            >
              {pickBadge && (
                <span className="absolute -top-2.5 right-4 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground">
                  {pickBadge}
                </span>
              )}
              <span className="flex items-start gap-3.5">
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
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                    isSelected ? "border-foreground bg-foreground" : "border-stone"
                  }`}
                >
                  {isSelected && <span className="h-2 w-2 rounded-full bg-background" />}
                </span>
                <span className="flex flex-1 flex-col">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-semibold uppercase tracking-wide">{label}</span>
                    {badge && (
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">
                        {badge}
                      </span>
                    )}
                  </span>
                  <span className="mt-1.5 flex flex-wrap items-baseline gap-x-2">
                    <span className="font-serif text-2xl leading-none">
                      {perDay(variant.price.amount, variant.price.currencyCode, srv)}
                    </span>
                    <span className="text-sm text-muted-foreground">per dag</span>
                    <span className="ml-auto flex items-baseline gap-1.5 text-xs text-muted-foreground">
                      {variant.compareAtPrice && (
                        <span className="line-through">
                          {formatMoney(variant.compareAtPrice.amount, variant.compareAtPrice.currencyCode)}
                        </span>
                      )}
                      <span className="font-medium text-foreground">
                        {formatMoney(variant.price.amount, variant.price.currencyCode)}
                      </span>
                    </span>
                  </span>
                  <span className="mt-1 text-xs text-muted-foreground">{note}</span>
                </span>
              </span>
              {isSelected && perks.length > 0 && (
                <ul className="mt-3.5 flex flex-col gap-1.5 border-t border-border pt-3.5 pl-8">
                  {perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Check className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                      {perk}
                    </li>
                  ))}
                </ul>
              )}
            </label>
          )
        })}
      </fieldset>

      <button
        type="button"
        disabled={isPending || !selected.availableForSale}
        onClick={() => addItem(selected.id)}
        className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-foreground py-4 text-sm font-semibold uppercase tracking-[0.1em] text-background transition-colors hover:bg-primary hover:text-primary-foreground disabled:opacity-50"
      >
        {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {selected.availableForSale
          ? `Lägg i varukorgen · ${formatMoney(selected.price.amount, selected.price.currencyCode)}`
          : "Slutsåld"}
      </button>

      <ul className="flex flex-col gap-2.5 border-t border-border pt-5">
        <li className="flex items-center gap-2.5 text-xs text-muted-foreground">
          <Truck className="h-4 w-4 shrink-0 text-foreground" aria-hidden="true" />
          {"Levereras inom 2–4 vardagar"}
        </li>
        <li className="flex items-center gap-2.5 text-xs text-muted-foreground">
          <RotateCcw className="h-4 w-4 shrink-0 text-foreground" aria-hidden="true" />
          {"30 dagars öppet köp, även på öppnade förpackningar"}
        </li>
        <li className="flex items-center gap-2.5 text-xs text-muted-foreground">
          <ShieldCheck className="h-4 w-4 shrink-0 text-foreground" aria-hidden="true" />
          {"Tredjepartstestad. Tillverkad i Sverige"}
        </li>
        <li className="flex items-center gap-2.5 text-xs text-muted-foreground">
          <Lock className="h-4 w-4 shrink-0 text-foreground" aria-hidden="true" />
          {"Säker betalning. Dela upp med Klarna"}
        </li>
      </ul>

      <PaymentBadges />
    </div>
  )
}
