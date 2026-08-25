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
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-ink">
      <Image
        src="/lifestyle/runclub-bottle.jpg"
        alt=""
        aria-hidden
        fill
        priority
        className="object-cover object-[46%_25%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink/75" aria-hidden />

      <div className="relative z-10 flex w-full flex-col items-center gap-6 px-6 py-16 text-center">
        <Image src="/brand/logo-light.png" alt="DYGN" width={120} height={34} priority className="h-7 w-auto" />
        <h1 className="max-w-2xl font-fraunces text-4xl leading-[1.05] text-ink-foreground text-balance sm:text-5xl md:text-6xl">
          The foundation your body needs.
        </h1>
        <p className="max-w-md text-base leading-relaxed text-ink-foreground/85 md:text-lg">
          Eight nutrients, one sachet, 30 seconds a day. A Swedish daily ritual, launching autumn 2026.
        </p>
        <WaitlistForm />
        <p className="text-xs uppercase tracking-[0.18em] text-ink-foreground/60">Made in Sweden</p>
      </div>
    </main>
  )
}
