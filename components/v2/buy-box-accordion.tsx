"use client"

import { useState } from "react"
import { Check, Loader2, Lock, RotateCcw, ShieldCheck, Truck } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"
import { useLang } from "@/components/lang-provider"
import { PaymentBadges } from "@/components/payment-badges"
import { formatMoney, perDay } from "@/lib/format"
import type { ProductVariant } from "@/lib/shopify"
import { findVariant, savingsPercent } from "@/lib/variants"
import { COPY } from "@/components/product/buy-box.copy"

type Opt = {
  variant: ProductVariant
  label: string
  header: string | null
  savePct: number
  servings: number
  note: string
  perks: string[]
}

/**
 * V2-köpbox i Cadence-stil: alternativen som grå "pills", och bara det valda
 * expanderas (pris per dag, fördelar) — övriga ligger som en tunn rad.
 * Accordion: ett öppet i taget.
 */
export function BuyBoxAccordion({ variants }: { variants: ProductVariant[] }) {
  const lang = useLang()
  const t = COPY[lang]
  const subscription = findVariant(variants, "subscription")
  const threePack = findVariant(variants, "threePack")
  const oneTime = findVariant(variants, "oneTime")
  const [selectedId, setSelectedId] = useState(subscription?.id ?? variants[0]?.id)
  const { addItem, isPending } = useCart()

  const selected = variants.find((v) => v.id === selectedId)
  if (!selected) return null

  const options = [
    subscription && {
      variant: subscription,
      label: t.options.subscription.label,
      header: t.options.subscription.pickBadge,
      savePct: savingsPercent(subscription),
      servings: 30,
      note: t.options.subscription.note,
      perks: t.options.subscription.perks,
    },
    threePack && {
      variant: threePack,
      label: t.options.threePack.label,
      header: null,
      savePct: savingsPercent(threePack),
      servings: 90,
      note: t.options.threePack.note,
      perks: t.options.threePack.perks,
    },
    oneTime && {
      variant: oneTime,
      label: t.options.oneTime.label,
      header: null,
      savePct: 0,
      servings: 30,
      note: t.options.oneTime.note,
      perks: t.options.oneTime.perks,
    },
  ].filter(Boolean) as Opt[]

  return (
    <div className="flex flex-col gap-5">
      <fieldset className="flex flex-col gap-2.5">
        <legend className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          {t.legend}
        </legend>
        {options.map((o) => {
          const isSel = o.variant.id === selectedId
          const price = formatMoney(o.variant.price.amount, o.variant.price.currencyCode, lang)
          const compare = o.variant.compareAtPrice
            ? formatMoney(o.variant.compareAtPrice.amount, o.variant.compareAtPrice.currencyCode, lang)
            : null
          return (
            <div
              key={o.variant.id}
              className={`overflow-hidden rounded-2xl border transition-colors ${
                isSel
                  ? "border-foreground bg-card shadow-[0_2px_20px_rgba(15,15,13,0.08)]"
                  : "border-transparent bg-secondary/70 hover:bg-secondary"
              }`}
            >
              {isSel && o.header && (
                <div className="bg-foreground py-1.5 text-center text-[10.5px] font-semibold uppercase tracking-[0.14em] text-background">
                  {o.header}
                </div>
              )}
              <label className="flex cursor-pointer items-center gap-3.5 px-4 py-3.5">
                <input
                  type="radio"
                  name="buy-option"
                  value={o.variant.id}
                  checked={isSel}
                  onChange={() => setSelectedId(o.variant.id)}
                  className="sr-only"
                />
                <span
                  aria-hidden
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                    isSel ? "border-foreground bg-foreground" : "border-muted-foreground/40"
                  }`}
                >
                  {isSel && <span className="h-1.5 w-1.5 rounded-full bg-background" />}
                </span>
                <span className="flex min-w-0 flex-1 flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-sm font-semibold text-foreground">{o.label}</span>
                  {o.savePct > 0 && (
                    <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground">
                      {t.save(o.savePct)}
                    </span>
                  )}
                </span>
                <span className="flex shrink-0 items-baseline gap-1.5">
                  {compare && <span className="text-xs text-muted-foreground line-through">{compare}</span>}
                  <span className="text-sm font-semibold text-foreground">{price}</span>
                </span>
              </label>

              {isSel && (
                <div className="px-4 pb-4 pl-[3.375rem]">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="font-serif text-2xl leading-none text-foreground">
                      {perDay(o.variant.price.amount, o.variant.price.currencyCode, o.servings, lang)}
                    </span>
                    <span className="text-sm text-muted-foreground">{t.perDay}</span>
                    <span className="ml-auto text-xs text-muted-foreground">{o.note}</span>
                  </div>
                  {o.perks.length > 0 && (
                    <ul className="mt-3 flex flex-col gap-1.5 border-t border-border pt-3">
                      {o.perks.map((perk) => (
                        <li key={perk} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Check className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
                          {perk}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </fieldset>

      <button
        type="button"
        disabled={isPending || !selected.availableForSale}
        onClick={() => addItem(selected.id)}
        className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-foreground py-4 text-sm font-semibold uppercase tracking-[0.1em] text-background transition-colors hover:bg-primary hover:text-primary-foreground disabled:opacity-50"
      >
        {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {selected.availableForSale
          ? t.addToCart(formatMoney(selected.price.amount, selected.price.currencyCode, lang))
          : t.soldOut}
      </button>

      <ul className="flex flex-col gap-2.5 border-t border-border pt-5">
        <li className="flex items-center gap-2.5 text-xs text-muted-foreground">
          <Truck className="h-4 w-4 shrink-0 text-foreground" aria-hidden="true" />
          {t.assurances.delivery}
        </li>
        <li className="flex items-center gap-2.5 text-xs text-muted-foreground">
          <RotateCcw className="h-4 w-4 shrink-0 text-foreground" aria-hidden="true" />
          {t.assurances.returns}
        </li>
        <li className="flex items-center gap-2.5 text-xs text-muted-foreground">
          <ShieldCheck className="h-4 w-4 shrink-0 text-foreground" aria-hidden="true" />
          {t.assurances.tested}
        </li>
        <li className="flex items-center gap-2.5 text-xs text-muted-foreground">
          <Lock className="h-4 w-4 shrink-0 text-foreground" aria-hidden="true" />
          {t.assurances.payment}
        </li>
      </ul>
      <PaymentBadges lang={lang} />
    </div>
  )
}
