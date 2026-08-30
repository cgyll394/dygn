// V2-only. "DYGN in the wild" — snabb auto-scrollande filmremsa av fisheye-bilder.
// Mörk botten gör att den svarta fisheye-vinjetten smälter in och fotona flyter.
const COUNT = 14
const IMAGES = Array.from({ length: COUNT }, (_, i) => `/lifestyle/wild/${String(i + 1).padStart(2, "0")}.jpg`)

export function WildGallery() {
  const loops = [0, 1]
  return (
    <section className="overflow-hidden bg-ink py-10 md:py-14" aria-label="DYGN i verkligheten">
      <p className="mb-7 text-center text-[11px] font-medium uppercase tracking-[0.24em] text-ink-foreground/55 md:mb-9">
        DYGN in the wild
      </p>
      <div className="flex w-max animate-marquee items-center gap-3 md:gap-4">
        {loops.map((loop) =>
          IMAGES.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${loop}-${i}`}
              src={src}
              alt=""
              aria-hidden
              className="h-[280px] w-auto rounded-xl object-cover md:h-[360px]"
            />
          )),
        )}
      </div>
    </section>
  )
}
