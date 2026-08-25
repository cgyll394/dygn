import type { Metadata, Viewport } from "next"
import Image from "next/image"
import { WaitlistForm } from "@/components/waitlist-form"

export const metadata: Metadata = {
  title: "DYGN · Daily nutrition. Launching soon.",
  description:
    "Eight nutrients, one sachet a day. A Swedish daily ritual, launching autumn 2026. Join the list for early access.",
}

// Safari tonar webbläsarens ytor (statusfält + verktygsfält) med theme-color.
// Fotots kantfärg gör att sidan smälter ihop med chromen i stället för hårt klipp.
export const viewport: Viewport = {
  themeColor: "#c5b6b5",
}

export default function WaitlistPage() {
  return (
    <main className="relative min-h-svh overflow-hidden bg-[#c5b6b5]">
      {/* Safari målar ytorna ovan/under sidan med body-bakgrunden vid overscroll */}
      <style>{"body{background:#c5b6b5}"}</style>

      {/* Mobil: porträttbilden i fullskärm */}
      <div className="absolute inset-0 md:hidden" aria-hidden>
        <Image
          src="/product/dygn-box-balance.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[50%_22%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/10 to-ink/55" />
      </div>

      {/* Desktop: utökade bilden i fullbredd med mjuk ton bakom copyn */}
      <div className="absolute inset-0 hidden md:block" aria-hidden>
        <Image
          src="/product/dygn-box-balance-wide.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[50%_22%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/30 via-ink/10 to-transparent" />
      </div>

      {/* Logga överst, båda brytpunkter */}
      <div className="absolute inset-x-0 top-0 z-10 flex justify-center pt-7">
        <Image src="/brand/logo-dark.png" alt="DYGN" width={100} height={28} priority className="h-5 w-auto" />
      </div>

      <div className="relative z-10 flex min-h-svh flex-col items-center justify-end gap-3 px-6 pb-11 text-center md:w-1/2 md:justify-center md:gap-4 md:px-12 md:pb-16">
        <h1 className="max-w-xl font-fraunces text-2xl leading-[1.1] text-ink-foreground text-balance sm:text-4xl lg:text-5xl">
          The foundation your body needs.
        </h1>
        <p className="max-w-xs text-xs leading-relaxed text-ink-foreground/90 md:max-w-sm md:text-base">
          {"Eight nutrients, one sachet a day."}
          <br />
          Launching autumn 2026.
        </p>
        <WaitlistForm />
        <p className="text-[10px] leading-relaxed text-ink-foreground/80">
          Early sign-ups get a free gift at launch.
        </p>
        <p className="text-[10px] uppercase tracking-[0.2em] text-ink-foreground/60">Made in Sweden</p>
      </div>
    </main>
  )
}
