"use client"

import Image from "next/image"
import { useState } from "react"
import type { ProductImage } from "@/lib/shopify"

export function ProductGallery({ images, title }: { images: ProductImage[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = images[activeIndex]

  if (!active) return null

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-muted">
        <Image
          src={active.url || "/placeholder.svg"}
          alt={active.altText ?? title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((image, index) => (
            <button
              key={image.url}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Visa bild ${index + 1}`}
              className={`relative aspect-[4/5] w-20 overflow-hidden rounded-md bg-muted transition-opacity ${
                index === activeIndex ? "ring-1 ring-foreground" : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={image.url || "/placeholder.svg"}
                alt=""
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
