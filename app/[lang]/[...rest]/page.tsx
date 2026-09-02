import { notFound } from "next/navigation"

// Okända sökvägar inom ett språk → 404 (app/[lang]/not-found.tsx)
export default function CatchAllPage() {
  notFound()
}
