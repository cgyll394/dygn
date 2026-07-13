import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { addToCart, createCart, getCart, removeCartLines, updateCartLines } from "@/lib/shopify"

const CART_COOKIE = "dygn_cart_id"

export async function GET() {
  const cookieStore = await cookies()
  const cartId = cookieStore.get(CART_COOKIE)?.value
  if (!cartId) {
    return NextResponse.json({ cart: null })
  }
  try {
    const cart = await getCart(cartId)
    return NextResponse.json({ cart })
  } catch {
    return NextResponse.json({ cart: null })
  }
}

export async function POST(request: Request) {
  const body = await request.json()
  const cookieStore = await cookies()
  const cartId = cookieStore.get(CART_COOKIE)?.value

  try {
    if (body.action === "add") {
      const lines = [{ merchandiseId: body.merchandiseId as string, quantity: (body.quantity as number) ?? 1 }]
      let cart
      if (cartId) {
        try {
          cart = await addToCart(cartId, lines)
        } catch {
          cart = await createCart(lines)
        }
      } else {
        cart = await createCart(lines)
      }
      const res = NextResponse.json({ cart })
      res.cookies.set(CART_COOKIE, cart.id, { maxAge: 60 * 60 * 24 * 14, path: "/" })
      return res
    }

    if (!cartId) {
      return NextResponse.json({ error: "No cart" }, { status: 400 })
    }

    if (body.action === "update") {
      const cart = await updateCartLines(cartId, [{ id: body.lineId as string, quantity: body.quantity as number }])
      return NextResponse.json({ cart })
    }

    if (body.action === "remove") {
      const cart = await removeCartLines(cartId, [body.lineId as string])
      return NextResponse.json({ cart })
    }

    return NextResponse.json({ error: "Unknown action" }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Cart error" }, { status: 500 })
  }
}
