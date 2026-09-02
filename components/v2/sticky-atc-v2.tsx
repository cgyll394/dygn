"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Check, ChevronDown, Loader2 } from "lucide-react"
import { useCart } from "@/components/cart/cart-context"
import { useLang } from "@/components/lang-provider"
import { formatMoney } from "@/lib/format"
import type { ProductVariant } from "@/lib/shopify"
import { findVariant, variantKind } from "@/lib/variants"
import { COPY } from "./sticky-atc-v2.copy"
import { COPY as boxCopy } from "@/components/product/buy-box.copy"

/**
 * V2-sticky-bar (Cadence-stil): glider upp när huvud-köpboxen (#kop-panel)
 * scrollats förbi. Har en egen inline-dropdown så man kan byta alternativ
 * direkt i baren och lägga i varukorgen utan att scrolla upp.
 */
export function StickyAtcV2({ variants, image }: { variants: ProductVariant[]; image?: string }) {
  const lang = useLang()
  const t = COPY[lang]
  const labels = boxCopy[lang].options
  const { addItem, isPending, isOpen } = useCart()

  const subscription = findVariant(variants, "subscription")
  const [selectedId, setSelectedId] = useState(subscription?.id ?? variants[0]?.id)
  const [visible, setVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Visa baren först när köpboxen scrollats förbi
  useEffect(() => {
    const target = document.getElementById("kop-panel")
    if (!target) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      rootMargin: "0px 0px -20% 0px",
    })
    io.observe(target)
    return () => io.disconnect()
  }, [])

  // Stäng dropdownen vid klick utanför / Escape
  useEffect(() => {
    if (!menuOpen) return
    function onDoc(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false)
    }
    document.addEventListener("mousedown", onDoc)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onDoc)
      document.removeEventListener("keydown", onKey)
    }
  }, [menuOpen])

  const selected = variants.find((v) => v.id === selectedId)
  if (!selected) return null

  const opts = [
    findVariant(variants, "subscription"),
    findVariant(variants, "threePack"),
    findVariant(variants, "oneTime"),
  ].filter(Boolean) as ProductVariant[]

  const labelFor = (v: ProductVariant) => labels[variantKind(v.title)].label
  const priceOf = (v: ProductVariant) => formatMoney(v.price.amount, v.price.currencyCode, lang)

  return (
    <div
      aria-hidden={isOpen || !visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 backdrop-blur-md transition-transform duration-300 ${
        isOpen || !visible ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="pb-safe mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 md:gap-5 md:px-8">
        {image && (
          <Image
            src={image}
            alt=""
            width={52}
            height={52}
            className="hidden h-11 w-11 shrink-0 rounded-lg object-cover sm:block"
          />
        )}
        <div className="hidden min-w-0 flex-col sm:flex md:min-w-[9rem]">
          <p className="truncate text-sm font-semibold text-foreground">{t.title}</p>
          <p className="text-xs text-muted-foreground">{t.pack}</p>
        </div>

        {/* Inline-dropdown för att byta alternativ */}
        <div ref={menuRef} className="relative flex-1 md:max-w-xs">
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-haspopup="listbox"
            aria-expanded={menuOpen}
            aria-label={t.chooseLabel}
            className="flex w-full items-center justify-between gap-2 rounded-full bg-secondary px-4 py-2.5 text-left transition-colors hover:bg-muted"
          >
            <span className="truncate text-sm font-medium text-foreground">{labelFor(selected)}</span>
            <span className="flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground">
              {priceOf(selected)}
              <ChevronDown className={`h-4 w-4 transition-transform ${menuOpen ? "rotate-180" : ""}`} aria-hidden />
            </span>
          </button>

          {menuOpen && (
            <ul
              role="listbox"
              className="absolute bottom-full left-0 z-10 mb-2 w-full overflow-hidden rounded-2xl border border-border bg-card shadow-[0_8px_30px_rgba(15,15,13,0.16)]"
            >
              {opts.map((v) => {
                const isSel = v.id === selectedId
                return (
                  <li key={v.id} role="option" aria-selected={isSel}>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedId(v.id)
                        setMenuOpen(false)
                      }}
                      className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-secondary ${
                        isSel ? "bg-secondary/60" : ""
                      }`}
                    >
                      <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                        <Check
                          className={`h-3.5 w-3.5 shrink-0 text-primary ${isSel ? "opacity-100" : "opacity-0"}`}
                          aria-hidden
                        />
                        {labelFor(v)}
                      </span>
                      <span className="text-sm text-muted-foreground">{priceOf(v)}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        <button
          type="button"
          disabled={isPending || !selected.availableForSale}
          onClick={() => addItem(selected.id)}
          className="flex min-h-[46px] shrink-0 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-xs font-semibold uppercase tracking-[0.08em] text-background transition-colors hover:bg-primary hover:text-primary-foreground disabled:opacity-50 md:px-8 md:text-sm"
        >
          {isPending ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : null}
          <span className="hidden sm:inline">{t.addToCart}</span>
          <span className="sm:hidden">{t.addShort}</span>
        </button>
      </div>
    </div>
  )
}
