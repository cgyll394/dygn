import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"
import { LANGS, localePath } from "@/lib/i18n"

const PAGES = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/produkt", changeFrequency: "weekly", priority: 0.9 },
  { path: "/formulering", changeFrequency: "monthly", priority: 0.8 },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return LANGS.flatMap((lang) =>
    PAGES.map((page) => ({
      url: `${SITE_URL}${localePath(lang, page.path)}`,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: Object.fromEntries(LANGS.map((l) => [l, `${SITE_URL}${localePath(l, page.path)}`])),
      },
    })),
  )
}
