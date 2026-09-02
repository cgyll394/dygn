import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Besley, Fraunces } from 'next/font/google'
import { CartProvider } from '@/components/cart/cart-context'
import { LangProvider } from '@/components/lang-provider'
import { SITE_URL } from '@/lib/site'
import { LANGS, OG_LOCALE, alternatesFor, localePath, type Lang } from '@/lib/i18n'
import { getLang, type LangParams } from '@/lib/lang-params'
import '../globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const besley = Besley({ subsets: ['latin'], variable: '--font-besley' })
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' })

const META: Record<Lang, { title: string; description: string; ogDescription: string; ogAlt: string }> = {
  sv: {
    title: 'DYGN · Daily Nutrition. Åtta näringsämnen. En sachet om dagen.',
    description:
      'Åtta näringsämnen i rätt form och rätt dos. Förklarat, dokumenterat och tredjepartstestat. Bara det viktiga, varje dag. Formulerat för nordisk kost.',
    ogDescription: 'Åtta näringsämnen i rätt form och rätt dos. En sachet om dagen.',
    ogAlt: 'DYGN Daily Nutrition-sachet',
  },
  en: {
    title: 'DYGN · Daily Nutrition. Eight nutrients. One sachet a day.',
    description:
      'Eight nutrients in the right form and the right dose. Explained, documented and third-party tested. Only what matters, every day. Formulated for the Nordic diet.',
    ogDescription: 'Eight nutrients in the right form and the right dose. One sachet a day.',
    ogAlt: 'DYGN Daily Nutrition sachet',
  },
}

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }))
}

// Proxyn skriver bara om till sv/en; allt annat är 404
export const dynamicParams = false

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await getLang(params)
  const t = META[lang]
  return {
    metadataBase: new URL(SITE_URL),
    alternates: alternatesFor(lang, '/'),
    title: t.title,
    description: t.description,
    icons: {
      icon: [
        { url: '/icon.svg', type: 'image/svg+xml' },
        { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png', media: '(prefers-color-scheme: light)' },
        { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png', media: '(prefers-color-scheme: dark)' },
      ],
      apple: '/apple-icon.png',
    },
    openGraph: {
      title: 'DYGN · Daily Nutrition',
      description: t.ogDescription,
      url: localePath(lang, '/'),
      siteName: 'DYGN',
      locale: OG_LOCALE[lang],
      alternateLocale: LANGS.filter((l) => l !== lang).map((l) => OG_LOCALE[l]),
      type: 'website',
      images: [{ url: '/og.jpg', width: 1200, height: 630, alt: t.ogAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'DYGN · Daily Nutrition',
      description: t.ogDescription,
      images: ['/og.jpg'],
    },
  }
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f2efe6',
}

export default async function RootLayout({ children, params }: LangParams & { children: React.ReactNode }) {
  const lang = await getLang(params)
  return (
    <html
      lang={lang}
      className={`light bg-background ${inter.variable} ${besley.variable} ${fraunces.variable}`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'DYGN',
              url: SITE_URL,
              logo: `${SITE_URL}/brand/logo-dark.png`,
            }),
          }}
        />
        <LangProvider lang={lang}>
          <CartProvider>{children}</CartProvider>
        </LangProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
