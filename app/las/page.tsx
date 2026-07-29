import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DYGN",
  robots: { index: false, follow: false },
}

export default async function LockPage({
  searchParams,
}: {
  searchParams: Promise<{ fel?: string }>
}) {
  const { fel } = await searchParams

  return (
    <main className="flex min-h-svh items-center justify-center bg-ink px-5">
      <form method="POST" action="/api/unlock" className="w-full max-w-sm text-center">
        <p className="text-3xl font-extrabold tracking-tight text-ink-foreground">
          DYGN<span className="align-super text-xs text-primary">{"●"}</span>
        </p>
        <label htmlFor="password" className="sr-only">
          Lösenord
        </label>
        <input
          id="password"
          type="password"
          name="password"
          required
          autoFocus
          placeholder="Lösenord"
          className="mt-8 w-full rounded-full border border-ink-foreground/30 bg-transparent px-6 py-3.5 text-center text-ink-foreground placeholder:text-ink-foreground/40 focus:border-ink-foreground focus:outline-none"
        />
        {fel && <p className="mt-3 text-sm text-primary">Fel lösenord. Försök igen.</p>}
        <button
          type="submit"
          className="mt-4 w-full rounded-full bg-primary py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-ink-foreground hover:text-ink"
        >
          Öppna
        </button>
      </form>
    </main>
  )
}
