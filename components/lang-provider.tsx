"use client"

import { createContext, useContext, type ReactNode } from "react"
import { DEFAULT_LANG, type Lang } from "@/lib/i18n"

const LangContext = createContext<Lang>(DEFAULT_LANG)

/** Sätts i app/[lang]/layout.tsx. Klientkomponenter läser språket med useLang(). */
export function LangProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>
}

export function useLang(): Lang {
  return useContext(LangContext)
}
