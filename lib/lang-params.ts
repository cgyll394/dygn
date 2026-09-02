import { notFound } from "next/navigation"
import { isLang, type Lang } from "@/lib/i18n"

/** Next typar [lang] som string; smalna av till Lang (404 för allt annat). */
export type LangParams = { params: Promise<{ lang: string }> }

export async function getLang(params: LangParams["params"]): Promise<Lang> {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  return lang
}
