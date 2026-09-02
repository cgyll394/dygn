"use client"

import Image from "next/image"
import Link from "next/link"
import { useLang } from "@/components/lang-provider"
import { localePath, type Lang } from "@/lib/i18n"

const sv = {
  heading: "Sidan finns inte.",
  text: "Länken kan vara gammal eller felstavad. Det viktigaste hittar du härifrån.",
  home: "Till startsidan",
  product: "Se produkten",
}

const en: typeof sv = {
  heading: "Page not found.",
  text: "The link may be old or misspelled. Everything important is one click away.",
  home: "Back to home",
  product: "See the product",
}

const COPY: Record<Lang, typeof sv> = { sv, en }

export function NotFoundContent() {
  const lang = useLang()
  const t = COPY[lang]

  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-ink px-5 text-center">
      <Image src="/brand/logo-light.png" alt="DYGN" width={96} height={27} priority className="h-6 w-auto" />
      <p className="mt-10 text-xs font-medium uppercase tracking-[0.22em] text-ink-muted">404</p>
      <h1 className="mt-3 font-fraunces text-4xl text-ink-foreground text-balance md:text-5xl">{t.heading}</h1>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-foreground/70">{t.text}</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href={localePath(lang, "/")}
          className="inline-flex min-h-[48px] items-center rounded-full bg-primary px-7 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
        >
          {t.home}
        </Link>
        <Link
          href={localePath(lang, "/produkt")}
          className="inline-flex min-h-[48px] items-center rounded-full border border-ink-foreground/40 px-7 text-sm font-semibold uppercase tracking-[0.08em] text-ink-foreground transition-colors hover:bg-ink-foreground/10"
        >
          {t.product}
        </Link>
      </div>
    </main>
  )
}
