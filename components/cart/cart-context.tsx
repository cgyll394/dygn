"use client"

import { createContext, useCallback, useContext, useState, type ReactNode } from "react"
import useSWR from "swr"
import type { Cart } from "@/lib/shopify"

interface CartContextValue {
  cart: Cart | null
  isLoading: boolean
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  isPending: boolean
  addItem: (merchandiseId: string, quantity?: number) => Promise<void>
  updateItem: (lineId: string, quantity: number) => Promise<void>
  removeItem: (lineId: string) => Promise<void>
}

const CartContext = createContext<CartContextValue | null>(null)

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function CartProvider({ children }: { children: ReactNode }) {
  const { data, isLoading, mutate } = useSWR<{ cart: Cart | null }>("/api/cart", fetcher)
  const [isOpen, setIsOpen] = useState(false)
  const [isPending, setIsPending] = useState(false)

  const cart = data?.cart ?? null

  const performAction = useCallback(
    async (body: Record<string, unknown>) => {
      setIsPending(true)
      try {
        const res = await fetch("/api/cart", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        })
        const json = await res.json()
        if (json.cart) {
          await mutate({ cart: json.cart }, { revalidate: false })
        }
      } finally {
        setIsPending(false)
      }
    },
    [mutate],
  )

  const addItem = useCallback(
    async (merchandiseId: string, quantity = 1) => {
      await performAction({ action: "add", merchandiseId, quantity })
      setIsOpen(true)
    },
    [performAction],
  )

  const updateItem = useCallback(
    async (lineId: string, quantity: number) => {
      await performAction({ action: "update", lineId, quantity })
    },
    [performAction],
  )

  const removeItem = useCallback(
    async (lineId: string) => {
      await performAction({ action: "remove", lineId })
    },
    [performAction],
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        isLoading,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        isPending,
        addItem,
        updateItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
