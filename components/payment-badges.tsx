import type { ReactNode } from "react"

/**
 * Betalmetoder som visas i trust-raden.
 * Håll denna lista i synk med vad som faktiskt är aktiverat i Shopify
 * (Inställningar → Betalningar). Att visa en metod som inte går att välja
 * i kassan är vilseledande — kommentera bort raden i stället.
 */
const ENABLED = ["visa", "mastercard", "amex", "klarna", "applepay", "googlepay", "shoppay"] as const

type Method = (typeof ENABLED)[number]

/** "light" = vita kort mot ljus bakgrund. "dark" = fristående märken mot mörk bild. */
type Tone = "light" | "dark"

const FONT = "Inter, system-ui, -apple-system, sans-serif"

function Visa({ tone }: { tone: Tone }) {
  return (
    <svg viewBox="0 0 48 16" className="h-full w-full" role="img" aria-label="Visa">
      <text
        x="24"
        y="12.5"
        textAnchor="middle"
        fontFamily={FONT}
        fontSize="13"
        fontWeight="700"
        fontStyle="italic"
        letterSpacing="0.5"
        fill={tone === "dark" ? "#FFFFFF" : "#1434CB"}
      >
        VISA
      </text>
    </svg>
  )
}

function Mastercard() {
  return (
    <svg viewBox="0 0 48 30" className="h-full w-full" role="img" aria-label="Mastercard">
      <circle cx="19" cy="15" r="9.5" fill="#EB001B" />
      <circle cx="29" cy="15" r="9.5" fill="#F79E1B" />
      <path d="M24 7.6a9.48 9.48 0 0 1 0 14.8 9.48 9.48 0 0 1 0-14.8Z" fill="#FF5F00" />
    </svg>
  )
}

function Amex({ fill = false }: { fill?: boolean }) {
  return (
    <svg
      viewBox="0 0 48 30"
      className="h-full w-full"
      role="img"
      aria-label="American Express"
      preserveAspectRatio={fill ? "none" : undefined}
    >
      <rect width="48" height="30" rx={fill ? 0 : 3} fill="#006FCF" />
      <text
        x="24"
        y="14"
        textAnchor="middle"
        fontFamily={FONT}
        fontSize="6.2"
        fontWeight="700"
        letterSpacing="0.2"
        fill="#FFFFFF"
      >
        AMERICAN
      </text>
      <text
        x="24"
        y="22"
        textAnchor="middle"
        fontFamily={FONT}
        fontSize="6.2"
        fontWeight="700"
        letterSpacing="0.2"
        fill="#FFFFFF"
      >
        EXPRESS
      </text>
    </svg>
  )
}

function Klarna({ fill = false }: { fill?: boolean }) {
  return (
    <svg
      viewBox="0 0 48 30"
      className="h-full w-full"
      role="img"
      aria-label="Klarna"
      preserveAspectRatio={fill ? "none" : undefined}
    >
      <rect width="48" height="30" rx={fill ? 0 : 4} fill="#FFB3C7" />
      <text
        x="24"
        y="19.5"
        textAnchor="middle"
        fontFamily={FONT}
        fontSize="11"
        fontWeight="700"
        letterSpacing="-0.3"
        fill="#0A0B09"
      >
        Klarna
      </text>
    </svg>
  )
}

function ApplePay({ tone }: { tone: Tone }) {
  const ink = tone === "dark" ? "#FFFFFF" : "#000000"
  return (
    <svg viewBox="0 0 48 20" className="h-full w-full" role="img" aria-label="Apple Pay">
      <g fill={ink}>
        <path d="M13.36 5.53c.53-.64.89-1.5.79-2.38-.76.03-1.7.5-2.24 1.14-.49.55-.92 1.44-.8 2.29.85.07 1.72-.42 2.25-1.05Z" />
        <path d="M14.14 6.75c-1.24-.07-2.29.7-2.88.7-.59 0-1.5-.66-2.46-.65-1.27.02-2.44.74-3.09 1.87-1.32 2.29-.34 5.68.94 7.54.63.91 1.38 1.93 2.36 1.9.95-.04 1.3-.61 2.45-.61 1.14 0 1.46.61 2.46.59 1.02-.02 1.66-.93 2.28-1.84.72-1.05 1.02-2.07 1.04-2.13-.02-.01-1.99-.77-2.01-3.03-.02-1.9 1.55-2.8 1.62-2.85-.89-1.3-2.26-1.45-2.71-1.49Z" />
      </g>
      <text x="22" y="15" fontFamily={FONT} fontSize="12" fontWeight="500" fill={ink}>
        Pay
      </text>
    </svg>
  )
}

function GooglePay({ tone }: { tone: Tone }) {
  return (
    <svg viewBox="0 0 48 20" className="h-full w-full" role="img" aria-label="Google Pay">
      <text x="7" y="15" fontFamily={FONT} fontSize="13" fontWeight="500" fill={tone === "dark" ? "#FFFFFF" : "#4285F4"}>
        G
      </text>
      <text x="18" y="15" fontFamily={FONT} fontSize="13" fontWeight="500" fill={tone === "dark" ? "#FFFFFF" : "#5F6368"}>
        Pay
      </text>
    </svg>
  )
}

function ShopPay({ fill = false }: { fill?: boolean }) {
  return (
    <svg
      viewBox="0 0 48 30"
      className="h-full w-full"
      role="img"
      aria-label="Shop Pay"
      preserveAspectRatio={fill ? "none" : undefined}
    >
      <rect width="48" height="30" rx={fill ? 0 : 4} fill="#5A31F4" />
      <text
        x="24"
        y="19.5"
        textAnchor="middle"
        fontFamily={FONT}
        fontSize="11"
        fontWeight="600"
        letterSpacing="-0.3"
        fill="#FFFFFF"
      >
        shop
      </text>
    </svg>
  )
}

// Märken med egen färgplatta — kan fylla hela chippet när brandedFill är på.
const SELF_BG = new Set<Method>(["klarna", "amex", "shoppay"])

function mark(method: Method, tone: Tone, fill: boolean): ReactNode {
  switch (method) {
    case "visa":
      return <Visa tone={tone} />
    case "mastercard":
      return <Mastercard />
    case "amex":
      return <Amex fill={fill} />
    case "klarna":
      return <Klarna fill={fill} />
    case "applepay":
      return <ApplePay tone={tone} />
    case "googlepay":
      return <GooglePay tone={tone} />
    case "shoppay":
      return <ShopPay fill={fill} />
  }
}

export function PaymentBadges({
  className = "",
  only,
  tone = "light",
  brandedFill = false,
}: {
  className?: string
  /** Visa bara ett urval, t.ex. i heron. Utan denna visas alla aktiverade metoder. */
  only?: readonly Method[]
  tone?: Tone
  /** Låt märken med egen färgplatta (Klarna m.fl.) fylla hela chippet i stället för att ligga i en tonad box. */
  brandedFill?: boolean
}) {
  const methods = only ?? ENABLED
  return (
    <ul className={`flex flex-wrap items-center gap-1.5 ${className}`} aria-label="Betalmetoder i kassan">
      {methods.map((method) => {
        const filled = brandedFill && SELF_BG.has(method)
        return (
          <li
            key={method}
            className={
              filled
                ? "flex h-7 w-[46px] items-center justify-center overflow-hidden rounded-[5px]"
                : `flex h-7 w-[46px] items-center justify-center rounded-[5px] border px-1.5 ${
                    tone === "dark"
                      ? "border-ink-foreground/30 bg-ink/35 backdrop-blur-sm"
                      : "border-border bg-white"
                  }`
            }
          >
            {mark(method, tone, filled)}
          </li>
        )
      })}
    </ul>
  )
}
