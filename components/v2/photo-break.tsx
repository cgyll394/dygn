import Image from "next/image"

export function PhotoBreak() {
  return (
    <section className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/10] lg:aspect-[21/9]" aria-hidden>
      <Image
        src="/product/dygn-sachets-5g.jpg"
        alt=""
        fill
        className="object-cover object-[50%_40%]"
        sizes="100vw"
      />
    </section>
  )
}
