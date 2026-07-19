export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8 md:py-16">
        <div className="max-w-md">
          <h2 className="font-serif text-2xl text-balance md:text-3xl">Anmäl dig till lanseringslistan</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-foreground/70">
            Få exklusiva erbjudanden och tidig tillgång till nya produkter.
          </p>
        </div>
        <form className="flex w-full max-w-md items-stretch" action="#" aria-label="Nyhetsbrev">
          <label htmlFor="newsletter-email" className="sr-only">
            E-postadress
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="E-postadress"
            className="min-w-0 flex-1 border border-ink-foreground/30 bg-transparent px-4 py-3 text-sm text-ink-foreground placeholder:text-ink-foreground/50 focus:border-primary focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Anmäl
          </button>
        </form>
      </div>
      <div className="border-t border-ink-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-6 text-xs text-ink-foreground/60 md:flex-row md:px-8">
          <p>Kosttillskott ersätter inte en varierad kost. Överskrid inte rekommenderad dygnsdos.</p>
          <p>{"© 2026 DYGN"}</p>
        </div>
      </div>
    </footer>
  )
}
