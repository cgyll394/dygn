import type { Lang } from "@/lib/i18n"

const sv = {
  imageAlt: "Löpare håller upp en DYGN-sachet och vattenflaska efter ett pass",
  eyebrow: "Tillverkad i Sverige",
  heading: "Grunden kroppen behöver. Varje dygn.",
  // Två strängar: radbryts på mobil med <br className="sm:hidden" /> i hero.tsx
  leadA: "En sachet, åtta näringsämnen. ",
  leadB: "Klart på 30 sekunder.",
  paymentNote: "Betala senare med Klarna eller prenumerera med Apple Pay",
  ctaPrimary: "Förbeställ DYGN",
  ctaSecondary: "Formuleringen",
  ratingLabel: "5 av 5 i betyg från tidiga testare",
  ratingCaption: "Från våra första 200 testare",
}

const en: typeof sv = {
  imageAlt: "Runner holding up a DYGN sachet and a water bottle after a workout",
  eyebrow: "Made in Sweden",
  heading: "The foundation your body needs. Every day.",
  leadA: "One sachet, eight nutrients. ",
  leadB: "Ready in 30 seconds.",
  paymentNote: "Pay later with Klarna or subscribe with Apple Pay",
  ctaPrimary: "Pre-order DYGN",
  ctaSecondary: "The formula",
  ratingLabel: "Rated 5 out of 5 by early testers",
  ratingCaption: "From our first 200 testers",
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
