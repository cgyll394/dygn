import type { Lang } from "@/lib/i18n"

const sv = {
  invalidEmail: "Ange en giltig e-postadress.",
  genericError: "Det gick inte att anmäla just nu. Försök igen om en stund.",
}

const en: typeof sv = {
  invalidEmail: "Please enter a valid email address.",
  genericError: "We couldn’t sign you up right now. Please try again in a moment.",
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
