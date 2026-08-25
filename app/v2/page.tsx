import type { Metadata, Viewport } from "next"
import { V2Header } from "@/components/v2/v2-header"
import { V2Hero } from "@/components/v2/v2-hero"
import { DayDots } from "@/components/v2/day-dots"
import { FormulaPanel } from "@/components/v2/formula-panel"
import { PhotoBreak } from "@/components/v2/photo-break"
import { BuyStrip } from "@/components/v2/buy-strip"
import { V2Footer } from "@/components/v2/v2-footer"

// Designutkast: körs parallellt med gamla startsidan tills vi bestämmer oss.
export const metadata: Metadata = {
  title: "DYGN · V2",
  robots: { index: false, follow: false },
}

export const viewport: Viewport = {
  themeColor: "#c5b6b5",
}

export default function V2Page() {
  return (
    <div className="theme-v2 bg-background text-foreground">
      <V2Header />
      <main>
        <V2Hero />
        <DayDots />
        <FormulaPanel />
        <PhotoBreak />
        <BuyStrip />
      </main>
      <V2Footer />
    </div>
  )
}
