import type { Lang } from "@/lib/i18n"

const sv = {
  showImage: (n: number) => `Visa bild ${n}`,
}

const en: typeof sv = {
  showImage: (n: number) => `Show image ${n}`,
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
