import type { Lang } from "@/lib/i18n"

// Mobil och desktop delar alt-text, rubrik och knappar — en post vardera.
// Ingressen skiljer sig mellan brytpunkterna, därför två poster.
const sv = {
  imageAlt: "DYGN-ask balanserar på ett finger",
  eyebrow: "Tillverkad i Sverige",
  heading: "Grunden kroppen behöver. Varje dygn.",
  leadMobile: "En sachet om dagen. Åtta näringsämnen.",
  leadDesktop: "En sachet, åtta näringsämnen. Klart på 30 sekunder.",
  cta: "Förbeställ DYGN",
  formulaLink: "Formuleringen",
  ratingLabel: "5 av 5 i betyg från tidiga testare",
  ratingCaption: "Från våra första 200 testare",
}

const en: typeof sv = {
  imageAlt: "DYGN box balancing on a finger",
  eyebrow: "Made in Sweden",
  heading: "The foundation your body needs. Every day.",
  leadMobile: "One sachet a day. Eight nutrients.",
  leadDesktop: "One sachet, eight nutrients. Ready in 30 seconds.",
  cta: "Pre-order DYGN",
  formulaLink: "The formula",
  ratingLabel: "Rated 5 out of 5 by early testers",
  ratingCaption: "From our first 200 testers",
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
