import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-end overflow-hidden bg-foreground">
      <Image
        src="/lifestyle/hero-track.jpeg"
        alt="Löpare på löparbana som håller en DYGN-sachet"
        fill
        priority
        className="object-cover object-[center_30%] opacity-95"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" aria-hidden />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-12 md:px-8 md:pb-16">
        <h1 className="font-serif text-4xl leading-tight text-primary-foreground text-balance sm:text-5xl md:text-7xl">
          Bygg en vana som håller.
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-primary-foreground/90 md:text-lg">
          Åtta näringsämnen. I de former forskningen pekar på. I doser som faktiskt gör skillnad. En påse om dagen.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <Link
            href="#kop"
            className="inline-flex items-center bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Förbeställ nu
          </Link>
          <Link
            href="#ingredienser"
            className="inline-flex items-center border border-primary-foreground/50 px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Se formuleringen
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-primary-foreground/75">
          <span>{"8 ingredienser, allt deklarerat"}</span>
          <span aria-hidden className="hidden h-1 w-1 rounded-full bg-primary-foreground/50 sm:block" />
          <span>{"Tillverkad i EU"}</span>
          <span aria-hidden className="hidden h-1 w-1 rounded-full bg-primary-foreground/50 sm:block" />
          <span>{"Avsluta prenumerationen när du vill"}</span>
        </div>
      </div>
    </section>
  )
}
