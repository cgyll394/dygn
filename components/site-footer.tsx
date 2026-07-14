import Image from "next/image"
import Link from "next/link"

const COLUMNS = [
  {
    heading: "Produkten",
    links: [
      { label: "Daily Nutrition", href: "/produkt" },
      { label: "Formuleringen", href: "/#formula" },
      { label: "Vanliga frågor", href: "/#faq" },
    ],
  },
  {
    heading: "Kundservice",
    links: [
      { label: "hej@dygn.se", href: "mailto:hej@dygn.se" },
      { label: "Leverans & retur", href: "/#faq" },
      { label: "Prenumeration", href: "/#faq" },
    ],
  },
  {
    heading: "Juridiskt",
    links: [
      { label: "Integritetspolicy", href: "#" },
      { label: "Köpvillkor", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-20 md:px-8 md:pt-28">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr] md:gap-20">
          <div>
            <p className="type-title max-w-md">
              Allt kroppen behöver. <em className="italic">Varje dygn.</em>
            </p>
            <form className="mt-10 flex max-w-md items-end gap-6" action="#" aria-label="Nyhetsbrev">
              <div className="min-w-0 flex-1">
                <label htmlFor="newsletter-email" className="type-eyebrow !text-ink-muted">
                  Lanseringslistan
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="E-postadress"
                  className="mt-3 w-full border-b border-ink-foreground/30 bg-transparent pb-2.5 text-[15px] text-ink-foreground transition-colors duration-300 placeholder:text-ink-muted focus:border-ink-foreground focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="shrink-0 border-b border-ink-foreground/30 pb-2.5 text-[15px] text-ink-foreground/80 transition-colors duration-300 hover:border-ink-foreground hover:text-ink-foreground"
              >
                {"Anmäl →"}
              </button>
            </form>
            <p className="mt-4 max-w-md text-xs leading-relaxed text-ink-muted">
              Tidig tillgång och besked när vi lanserar. Inget brus.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {COLUMNS.map((column) => (
              <div key={column.heading}>
                <p className="type-eyebrow !text-ink-muted">{column.heading}</p>
                <ul className="mt-5 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-ink-foreground/75 transition-colors duration-300 hover:text-ink-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-ink-foreground/15 pt-7 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
          <Image src="/brand/logo-light.png" alt="DYGN" width={72} height={20} className="h-4 w-auto" />
          <p>Kosttillskott ersätter inte en varierad kost. Överskrid inte rekommenderad dygnsdos.</p>
          <p>{"© 2026 DYGN"}</p>
        </div>
      </div>
    </footer>
  )
}
