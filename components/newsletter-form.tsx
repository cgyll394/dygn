"use client"

import { useState } from "react"

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")
  const [error, setError] = useState("")

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    setStatus("loading")
    setError("")
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: String(data.get("email") ?? ""),
          company: String(data.get("company") ?? ""),
        }),
      })
      const json = await res.json()
      if (json.ok) {
        setStatus("done")
      } else {
        setStatus("error")
        setError(typeof json.error === "string" ? json.error : "Något gick fel. Försök igen.")
      }
    } catch {
      setStatus("error")
      setError("Något gick fel. Försök igen.")
    }
  }

  if (status === "done") {
    return (
      <p className="w-full max-w-md text-sm leading-relaxed text-ink-foreground/80" role="status">
        Tack! Du står på listan. Vi hör av oss när det närmar sig.
      </p>
    )
  }

  return (
    <div className="w-full max-w-md">
      <form onSubmit={onSubmit} className="flex items-stretch" aria-label="Nyhetsbrev">
        <label htmlFor="newsletter-email" className="sr-only">
          E-postadress
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="E-postadress"
          className="min-w-0 flex-1 border border-ink-foreground/30 bg-transparent px-4 py-3 text-sm text-ink-foreground placeholder:text-ink-foreground/50 focus:border-primary focus:outline-none"
        />
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
        >
          {status === "loading" ? "Anmäler" : "Anmäl"}
        </button>
      </form>
      {status === "error" && (
        <p role="alert" className="mt-2 text-xs text-primary">
          {error}
        </p>
      )}
    </div>
  )
}
