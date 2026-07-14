"use client"

import Image from "next/image"
import { useState } from "react"
import type { ProductImage } from "@/lib/shopify"

export function ProductGallery({ images, title }: { images: ProductImage[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = images[activeIndex]

  if (!active) return null

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square w-full overflow-hidden bg-muted">
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
              className={`relative aspect-square w-16 overflow-hidden bg-muted transition-opacity duration-300 ${
                index === activeIndex ? "" : "opacity-50 hover:opacity-100"
              }`}
            >
              <Image src={image.url || "/placeholder.svg"} alt="" fill sizes="64px" className="object-cover" />
              <span
                aria-hidden
                className={`absolute inset-x-0 bottom-0 h-[2px] bg-foreground transition-opacity duration-300 ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
