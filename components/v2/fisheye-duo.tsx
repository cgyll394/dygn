import Image from "next/image"

// De två fisheye-bilderna sida vid sida. Ersätter ImageBreak i v2;
// runclub-fotot som var hero i v1 lever vidare här.
export function FisheyeDuo() {
  return (
    <section className="grid md:grid-cols-2" aria-hidden>
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src="/lifestyle/runclub-bottle.jpg"
          alt=""
          fill
          className="object-cover object-[46%_30%]"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="relative hidden aspect-[4/5] overflow-hidden md:block">
        <Image
          src="/lifestyle/track-fisheye.jpg"
          alt=""
          fill
          className="object-cover object-[50%_35%]"
          sizes="50vw"
        />
      </div>
    </section>
  )
}
