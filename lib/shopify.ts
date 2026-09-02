import { DEFAULT_LANG, SHOPIFY_LANGUAGE, type Lang } from "@/lib/i18n"

const domain = process.env.SHOPIFY_STORE_DOMAIN!
const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!

const API_VERSION = "2026-01"

// Butiken har både engelska och svenska publicerade (engelska är standard).
// @inContext(language) styr översatt innehåll och, viktigast, kassans språk.

export async function storefrontFetch<T>({
  query,
  variables,
  cache = "no-store",
}: {
  query: string
  variables?: Record<string, unknown>
  cache?: RequestCache
}): Promise<T> {
  const res = await fetch(`https://${domain}/api/${API_VERSION}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query, variables }),
    cache,
  })

  const json = await res.json()
  if (json.errors) {
    throw new Error(json.errors.map((e: { message: string }) => e.message).join(", "))
  }
  return json.data as T
}

export interface Money {
  amount: string
  currencyCode: string
}

export interface ProductVariant {
  id: string
  title: string
  availableForSale: boolean
  price: Money
  compareAtPrice: Money | null
}

export interface ProductImage {
  url: string
  altText: string | null
  width: number
  height: number
}

export interface Product {
  id: string
  title: string
  description: string
  images: { nodes: ProductImage[] }
  variants: { nodes: ProductVariant[] }
}

export interface CartLine {
  id: string
  quantity: number
  merchandise: {
    id: string
    title: string
    price: Money
    product: { title: string }
    image: { url: string; altText: string | null } | null
  }
}

export interface Cart {
  id: string
  checkoutUrl: string
  totalQuantity: number
  cost: { subtotalAmount: Money }
  lines: { nodes: CartLine[] }
}

const CART_FRAGMENT = `
  id
  checkoutUrl
  totalQuantity
  cost { subtotalAmount { amount currencyCode } }
  lines(first: 20) {
    nodes {
      id
      quantity
      merchandise {
        ... on ProductVariant {
          id
          title
          price { amount currencyCode }
          product { title }
          image { url altText }
        }
      }
    }
  }
`

export async function getProduct(handle: string, lang: Lang = DEFAULT_LANG): Promise<Product | null> {
  const data = await storefrontFetch<{ product: Product | null }>({
    query: `
      query getProduct($handle: String!, $language: LanguageCode!) @inContext(language: $language) {
        product(handle: $handle) {
          id
          title
          description
          images(first: 6) { nodes { url altText width height } }
          variants(first: 10) {
            nodes {
              id
              title
              availableForSale
              price { amount currencyCode }
              compareAtPrice { amount currencyCode }
            }
          }
        }
      }
    `,
    variables: { handle, language: SHOPIFY_LANGUAGE[lang] },
    cache: "no-store",
  })
  return data.product
}

export async function createCart(
  lines: { merchandiseId: string; quantity: number }[],
  lang: Lang = DEFAULT_LANG,
): Promise<Cart> {
  const data = await storefrontFetch<{
    cartCreate: { cart: Cart; userErrors: { message: string }[] }
  }>({
    query: `
      mutation cartCreate($lines: [CartLineInput!]!, $language: LanguageCode!) @inContext(language: $language) {
        cartCreate(input: { lines: $lines }) {
          cart { ${CART_FRAGMENT} }
          userErrors { field message }
        }
      }
    `,
    variables: { lines, language: SHOPIFY_LANGUAGE[lang] },
  })
  if (data.cartCreate.userErrors.length > 0) {
    throw new Error(data.cartCreate.userErrors[0].message)
  }
  return data.cartCreate.cart
}

export async function getCart(cartId: string, lang: Lang = DEFAULT_LANG): Promise<Cart | null> {
  const data = await storefrontFetch<{ cart: Cart | null }>({
    query: `
      query getCart($cartId: ID!, $language: LanguageCode!) @inContext(language: $language) {
        cart(id: $cartId) { ${CART_FRAGMENT} }
      }
    `,
    variables: { cartId, language: SHOPIFY_LANGUAGE[lang] },
  })
  return data.cart
}

export async function addToCart(
  cartId: string,
  lines: { merchandiseId: string; quantity: number }[],
  lang: Lang = DEFAULT_LANG,
): Promise<Cart> {
  const data = await storefrontFetch<{
    cartLinesAdd: { cart: Cart; userErrors: { message: string }[] }
  }>({
    query: `
      mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!, $language: LanguageCode!) @inContext(language: $language) {
        cartLinesAdd(cartId: $cartId, lines: $lines) {
          cart { ${CART_FRAGMENT} }
          userErrors { field message }
        }
      }
    `,
    variables: { cartId, lines, language: SHOPIFY_LANGUAGE[lang] },
  })
  if (data.cartLinesAdd.userErrors.length > 0) {
    throw new Error(data.cartLinesAdd.userErrors[0].message)
  }
  return data.cartLinesAdd.cart
}

export async function updateCartLines(
  cartId: string,
  lines: { id: string; quantity: number }[],
  lang: Lang = DEFAULT_LANG,
): Promise<Cart> {
  const data = await storefrontFetch<{
    cartLinesUpdate: { cart: Cart; userErrors: { message: string }[] }
  }>({
    query: `
      mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!, $language: LanguageCode!) @inContext(language: $language) {
        cartLinesUpdate(cartId: $cartId, lines: $lines) {
          cart { ${CART_FRAGMENT} }
          userErrors { field message }
        }
      }
    `,
    variables: { cartId, lines, language: SHOPIFY_LANGUAGE[lang] },
  })
  if (data.cartLinesUpdate.userErrors.length > 0) {
    throw new Error(data.cartLinesUpdate.userErrors[0].message)
  }
  return data.cartLinesUpdate.cart
}

export async function removeCartLines(cartId: string, lineIds: string[], lang: Lang = DEFAULT_LANG): Promise<Cart> {
  const data = await storefrontFetch<{
    cartLinesRemove: { cart: Cart; userErrors: { message: string }[] }
  }>({
    query: `
      mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!, $language: LanguageCode!) @inContext(language: $language) {
        cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
          cart { ${CART_FRAGMENT} }
          userErrors { field message }
        }
      }
    `,
    variables: { cartId, lineIds, language: SHOPIFY_LANGUAGE[lang] },
  })
  if (data.cartLinesRemove.userErrors.length > 0) {
    throw new Error(data.cartLinesRemove.userErrors[0].message)
  }
  return data.cartLinesRemove.cart
}
