import type { Lang } from "@/lib/i18n"

const sv = {
  heading: "Anmäl dig till lanseringslistan",
  text: "Få exklusiva erbjudanden och tidig tillgång till nya produkter.",
  assurances: ["30 dagars öppet köp", "Fri frakt med prenumeration", "Tredjepartstestad", "Säker betalning"],
  disclaimer: "Kosttillskott ersätter inte en varierad kost. Överskrid inte rekommenderad dygnsdos.",
  copyright: "© 2026 DYGN",
}

const en: typeof sv = {
  heading: "Join the launch list",
  text: "Exclusive offers and early access to new products.",
  assurances: ["30-day money-back guarantee", "Free shipping with subscription", "Third-party tested", "Secure payment"],
  disclaimer: "Dietary supplements are not a substitute for a varied diet. Do not exceed the recommended daily dose.",
  copyright: "© 2026 DYGN",
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
