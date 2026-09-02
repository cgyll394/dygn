import type { Lang } from "@/lib/i18n"

const sv = {
  imageAlt: "DYGN-sachet under vattenytan i solljus",
  eyebrow: "Kvalitet",
  heading: "Tillverkad i Sverige. Testad av oberoende labb.",
  text: "Hos en HACCP-certifierad svensk tillverkare som följer GMP. Varje produktion tredjepartstestas av Eurofins för tungmetaller och mikrobiologisk säkerhet.",
  link: "Läs om formuleringen",
  haccpAlt: "HACCP-certifierad tillverkning",
  eurofinsAlt: "Tredjepartstestad av Eurofins",
}

const en: typeof sv = {
  imageAlt: "DYGN sachet beneath the surface of the water in sunlight",
  eyebrow: "Quality",
  heading: "Made in Sweden. Tested by an independent lab.",
  text: "At a HACCP-certified Swedish manufacturer that follows GMP. Every batch is third-party tested by Eurofins for heavy metals and microbiological safety.",
  link: "Read about the formula",
  haccpAlt: "HACCP-certified manufacturing",
  eurofinsAlt: "Third-party tested by Eurofins",
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
