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
      <p className="text-sm text-ink-foreground md:text-ink" role="status">
        Thanks. You are on the list.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-[250px] flex-col gap-2 md:max-w-xs md:gap-2.5" aria-label="Waitlist">
      <label htmlFor="waitlist-email" className="sr-only">
        Email address
      </label>
      <input
        id="waitlist-email"
        name="email"
        type="email"
        required
        placeholder="Your email"
        className="w-full rounded-full border border-ink/15 bg-white/90 px-4 py-2.5 text-center text-[13px] text-ink placeholder:text-ink/45 focus:border-primary focus:outline-none md:py-3 md:text-sm"
      />
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-primary py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-ink hover:text-ink-foreground disabled:opacity-60 md:py-3 md:text-xs"
      >
        Notify me
      </button>
      {status === "error" && (
        <p role="alert" className="text-xs text-ink-foreground md:text-destructive">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
