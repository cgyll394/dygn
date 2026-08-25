"use client"

import { useState } from "react"

export function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    setStatus("loading")
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
      setStatus(json.ok ? "done" : "error")
    } catch {
      setStatus("error")
    }
  }

  if (status === "done") {
    return (
      <p className="text-sm text-ink" role="status">
        Thanks. You are on the list.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-xs flex-col gap-2.5" aria-label="Waitlist">
      <label htmlFor="waitlist-email" className="sr-only">
        Email address
      </label>
      <input
        id="waitlist-email"
        name="email"
        type="email"
        required
        placeholder="Your email"
        className="w-full rounded-full border border-ink/15 bg-white/90 px-5 py-3 text-center text-sm text-ink placeholder:text-ink/45 focus:border-primary focus:outline-none"
      />
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-primary py-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-ink hover:text-ink-foreground disabled:opacity-60"
      >
        Notify me
      </button>
      {status === "error" && (
        <p role="alert" className="text-xs text-destructive">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
