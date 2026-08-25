import type { Metadata } from "next"
import Image from "next/image"
import { WaitlistForm } from "@/components/waitlist-form"

export const metadata: Metadata = {
  title: "DYGN · Daily nutrition. Launching soon.",
  description:
    "Eight nutrients, one sachet a day. A Swedish daily ritual, launching autumn 2026. Join the list for early access.",
}

export default function WaitlistPage() {
  return (
    <main className="relative min-h-svh overflow-hidden bg-background">
      {/* Mobil: bilden i fullskärm bakom innehållet */}
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

      {/* Desktop: bilden hel i högra halvan */}
      <div className="absolute inset-y-0 right-0 hidden w-1/2 md:block" aria-hidden>
        <Image
          src="/product/dygn-box-balance.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[50%_30%]"
          sizes="50vw"
        />
      </div>

      {/* Mobil: logga överst över bilden */}
      <div className="absolute inset-x-0 top-0 z-10 flex justify-center pt-7 md:hidden">
        <Image src="/brand/logo-dark.png" alt="" aria-hidden width={100} height={28} priority className="h-5 w-auto" />
      </div>

      <div className="relative z-10 flex min-h-svh flex-col items-center justify-end gap-3 px-6 pb-11 pt-40 text-center md:w-1/2 md:justify-center md:gap-5 md:bg-card md:px-12 md:py-16 lg:px-16">
        <Image
          src="/brand/logo-dark.png"
          alt="DYGN"
          width={100}
          height={28}
          className="hidden h-5 w-auto md:mb-2 md:block"
        />
        <h1 className="max-w-xl font-fraunces text-2xl leading-[1.1] text-ink-foreground text-balance sm:text-4xl md:text-ink lg:text-5xl">
          The foundation your body needs.
        </h1>
        <p className="max-w-xs text-xs leading-relaxed text-ink-foreground/90 md:max-w-sm md:text-base md:text-ink/70">
          {"Eight nutrients, one sachet a day."}
          <br />
          Launching autumn 2026.
        </p>
        <WaitlistForm />
        <p className="text-[10px] uppercase tracking-[0.2em] text-ink-foreground/70 md:text-ink/50">Made in Sweden</p>
      </div>
    </main>
  )
}
