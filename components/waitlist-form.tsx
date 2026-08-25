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
      <p className="text-base text-ink-foreground" role="status">
        Thanks. You are on the list.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-sm flex-col gap-3" aria-label="Waitlist">
      <label htmlFor="waitlist-email" className="sr-only">
        Email address
      </label>
      <input
        id="waitlist-email"
        name="email"
        type="email"
        required
        placeholder="Your email"
        className="w-full rounded-full border border-ink-foreground/20 bg-ink-foreground px-6 py-4 text-center text-base text-ink placeholder:text-ink/50 focus:border-primary focus:outline-none"
      />
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-primary py-4 text-sm font-semibold uppercase tracking-[0.1em] text-primary-foreground transition-colors hover:bg-ink-foreground hover:text-ink disabled:opacity-60"
      >
        Notify me
      </button>
      {status === "error" && (
        <p role="alert" className="text-sm text-ink-foreground/90">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
