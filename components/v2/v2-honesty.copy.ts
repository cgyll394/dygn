import type { Lang } from "@/lib/i18n"

const sv = {
  heading: "Tillverkad i Sverige. Testad av oberoende labb.",
  text: "Hos en HACCP-certifierad svensk tillverkare som följer GMP. Varje produktion tredjepartstestas för tungmetaller och mikrobiologisk säkerhet.",
  link: "Läs om formuleringen",
  haccpAlt: "HACCP-certifierad tillverkning",
  gmpAlt: "GMP — god tillverkningssed",
}

const en: typeof sv = {
  heading: "Made in Sweden. Tested by an independent lab.",
  text: "At a HACCP-certified Swedish manufacturer that follows GMP. Every batch is third-party tested for heavy metals and microbiological safety.",
  link: "Read about the formula",
  haccpAlt: "HACCP-certified manufacturing",
  gmpAlt: "GMP — Good Manufacturing Practice",
}

export const COPY: Record<Lang, typeof sv> = { sv, en }
