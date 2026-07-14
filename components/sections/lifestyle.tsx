import Image from "next/image"

export function Philosophy() {
  return (
    <section className="relative flex min-h-[80svh] items-center justify-center overflow-hidden bg-ink" aria-label="Vår princip">
      <Image
        src="/lifestyle/cyclist.jpg"
        alt="Cyklist sedd ovanifrån i kvällsljus"
        fill
        className="object-cover opacity-60"
        sizes="100vw"
      />
      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center md:px-8">
        <p className="type-eyebrow !text-ink-muted">Principen</p>
        <p className="type-title mt-6 text-ink-foreground">
          Vi adderar bara det vi har belägg för. <em className="italic">Vi utelämnar resten.</em>
        </p>
      </div>
    </section>
  )
}
