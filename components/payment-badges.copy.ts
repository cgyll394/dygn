import type { Lang } from "@/lib/i18n"

const sv = {
  label: "Betalmetoder i kassan",
}

const en: typeof sv = {
  label: "Payment methods at checkout",
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
