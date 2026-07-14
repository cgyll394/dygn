"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"
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
  meta: string | null
  note: string | null
  servings: number
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
      meta: savings(subscription) > 0 ? `Vanligast — spara ${savings(subscription)} %` : "Vanligast",
      note: "En förpackning var 30:e dag, fri frakt. Pausa eller avsluta när som helst.",
      servings: 30,
    },
    threePack && {
      variant: threePack,
      label: "3-pack",
      meta: savings(threePack) > 0 ? `90 dagar — spara ${savings(threePack)} %` : "90 dagar",
      note: "Tre förpackningar, en leverans. Fri frakt.",
      servings: 90,
    },
    oneTime && {
      variant: oneTime,
      label: "Engångsköp",
      meta: "30 dagar",
      note: null,
      servings: 30,
    },
  ].filter(Boolean) as Option[]

  return (
    <div className="flex flex-col">
      <fieldset>
        <legend className="type-eyebrow mb-4">Välj ditt sätt att köpa</legend>
        <div className="border-y border-border">
          {options.map(({ variant, label, meta, note, servings: srv }, index) => {
            const isSelected = variant.id === selectedId
            return (
              <label
                key={variant.id}
                className={`group relative flex cursor-pointer flex-col py-5 transition-colors duration-300 ${
                  index > 0 ? "border-t border-border" : ""
                }`}
              >
                <span className="flex items-baseline gap-4">
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
                    className={`relative top-[1px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                      isSelected ? "border-foreground" : "border-input group-hover:border-foreground/60"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full bg-foreground transition-transform duration-300 ease-out ${
                        isSelected ? "scale-100" : "scale-0"
                      }`}
                    />
                  </span>
                  <span className="flex flex-1 flex-wrap items-baseline gap-x-4 gap-y-0.5">
                    <span className="text-[15px] font-medium">{label}</span>
                    {meta && <span className="text-xs text-muted-foreground">{meta}</span>}
                  </span>
                  <span className="flex shrink-0 items-baseline gap-3">
                    {variant.compareAtPrice && (
                      <span className="text-xs text-muted-foreground line-through decoration-muted-foreground/60">
                        {formatMoney(variant.compareAtPrice.amount, variant.compareAtPrice.currencyCode)}
                      </span>
                    )}
                    <span className="font-serif text-xl leading-none [font-variation-settings:'SOFT'_0,'WONK'_0]">
                      {formatMoney(variant.price.amount, variant.price.currencyCode)}
                    </span>
                  </span>
                </span>
                <span className="flex items-baseline justify-between gap-4 pl-8">
                  {isSelected && note ? (
                    <span className="mt-1.5 max-w-xs text-xs leading-relaxed text-muted-foreground">{note}</span>
                  ) : (
                    <span />
                  )}
                  <span className="mt-1.5 shrink-0 text-xs tabular-nums text-muted-foreground">
                    {`${perDay(variant.price.amount, variant.price.currencyCode, srv)} per dag`}
                  </span>
                </span>
              </label>
            )
          })}
        </div>
      </fieldset>

      <button
        type="button"
        disabled={isPending || !selected.availableForSale}
        onClick={() => addItem(selected.id)}
        className="btn mt-6 h-14 w-full bg-primary text-primary-foreground hover:bg-foreground hover:text-background disabled:opacity-50"
      >
        {isPending ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : null}
        {selected.availableForSale
          ? `Lägg i varukorgen — ${formatMoney(selected.price.amount, selected.price.currencyCode)}`
          : "Slutsåld"}
      </button>

      <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
        {"Levereras inom 2–4 vardagar · 30 dagars öppet köp, även öppnad förpackning · Tredjepartstestad, tillverkad i EU enligt GMP"}
      </p>
    </div>
  )
}
