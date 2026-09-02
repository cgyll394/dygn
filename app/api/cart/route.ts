import { cookies } from "next/headers"
import { NextResponse, type NextRequest } from "next/server"
import { addToCart, createCart, getCart, removeCartLines, updateCartLines } from "@/lib/shopify"
import { DEFAULT_LANG, isLang, type Lang } from "@/lib/i18n"

const CART_COOKIE = "dygn_cart_id"

function langFrom(value: unknown): Lang {
  return isLang(value) ? value : DEFAULT_LANG
}

export async function GET(request: NextRequest) {
  const lang = langFrom(request.nextUrl.searchParams.get("lang"))
  const cookieStore = await cookies()
  const cartId = cookieStore.get(CART_COOKIE)?.value
  if (!cartId) {
    return NextResponse.json({ cart: null })
  }
  try {
    const cart = await getCart(cartId, lang)
    return NextResponse.json({ cart })
  } catch {
    return NextResponse.json({ cart: null })
  }
}

export async function POST(request: Request) {
  const body = await request.json()
  const lang = langFrom(body.lang)
  const cookieStore = await cookies()
  const cartId = cookieStore.get(CART_COOKIE)?.value

  try {
    if (body.action === "add") {
      const lines = [{ merchandiseId: body.merchandiseId as string, quantity: (body.quantity as number) ?? 1 }]
      let cart
      if (cartId) {
        try {
          cart = await addToCart(cartId, lines, lang)
        } catch {
          cart = await createCart(lines, lang)
        }
      } else {
        cart = await createCart(lines, lang)
      }
      const res = NextResponse.json({ cart })
      res.cookies.set(CART_COOKIE, cart.id, { maxAge: 60 * 60 * 24 * 14, path: "/" })
      return res
    }

    if (!cartId) {
      return NextResponse.json({ error: "No cart" }, { status: 400 })
    }

    if (body.action === "update") {
      const cart = await updateCartLines(
        cartId,
        [{ id: body.lineId as string, quantity: body.quantity as number }],
        lang,
      )
      return NextResponse.json({ cart })
    }

    if (body.action === "remove") {
      const cart = await removeCartLines(cartId, [body.lineId as string], lang)
      return NextResponse.json({ cart })
    }

    return NextResponse.json({ error: "Unknown action" }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Cart error" }, { status: 500 })
  }
}
