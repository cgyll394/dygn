import type { Metadata } from "next"
import Image from "next/image"
import { WaitlistForm } from "@/components/waitlist-form"

export const metadata: Metadata = {
  title: "DYGN · Daily nutrition. Launching soon.",
  description:
    "Eight nutrients, one sachet, 30 seconds a day. A Swedish daily ritual, launching autumn 2026. Join the list for early access.",
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
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/5 to-background/80" />
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
      <div className="absolute inset-x-0 top-0 z-10 flex justify-center pt-8 md:hidden">
        <Image src="/brand/logo-dark.png" alt="" aria-hidden width={120} height={34} priority className="h-6 w-auto" />
      </div>

      <div className="relative z-10 flex min-h-svh flex-col items-center justify-end gap-5 px-6 pb-12 pt-40 text-center md:w-1/2 md:justify-center md:gap-6 md:px-12 md:py-16 lg:px-16">
        <Image
          src="/brand/logo-dark.png"
          alt="DYGN"
          width={120}
          height={34}
          className="hidden h-6 w-auto md:mb-2 md:block"
        />
        <h1 className="max-w-2xl font-fraunces text-4xl leading-[1.05] text-ink text-balance sm:text-5xl lg:text-6xl">
          The foundation your body needs.
        </h1>
        <p className="max-w-md text-base leading-relaxed text-ink/75 md:text-lg">
          Eight nutrients, one sachet, 30 seconds a day. A Swedish daily ritual, launching autumn 2026.
        </p>
        <WaitlistForm />
        <p className="text-xs uppercase tracking-[0.18em] text-ink/55">Made in Sweden</p>
      </div>
    </main>
  )
}
