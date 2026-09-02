import { NotFoundContent } from "@/components/not-found-content"

// not-found.tsx får inga params; språket kommer från LangProvider i layouten.
export default function NotFound() {
  return <NotFoundContent />
}
