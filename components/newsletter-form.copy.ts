import type { Lang } from "@/lib/i18n"

const sv = {
  formLabel: "Nyhetsbrev",
  emailLabel: "E-postadress",
  placeholder: "E-postadress",
  submit: "Anmäl",
  submitting: "Anmäler",
  success: "Tack! Du står på listan. Vi hör av oss när det närmar sig.",
  genericError: "Något gick fel. Försök igen.",
}

const en: typeof sv = {
  formLabel: "Newsletter",
  emailLabel: "Email address",
  placeholder: "Email address",
  submit: "Sign up",
  submitting: "Signing up",
  success: "Thank you. You’re on the list. We’ll be in touch as the launch approaches.",
  genericError: "Something went wrong. Please try again.",
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
