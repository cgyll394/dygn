export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  // usedygn.se 308-redirectar till www, så www är den kanoniska värden
  (process.env.NODE_ENV === "production" ? "https://www.usedygn.se" : "http://localhost:3001")
