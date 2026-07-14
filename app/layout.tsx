import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import { CartProvider } from '@/components/cart/cart-context'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  axes: ['opsz', 'SOFT', 'WONK'],
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'DYGN — Daily Nutrition. Åtta näringsämnen. En sachet om dagen.',
  description:
    'Åtta näringsämnen i de former och doser forskningen pekar på. Inget revolutionerande. Bara det viktiga, varje dag. Formulerat för nordisk kost.',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'DYGN — Daily Nutrition',
    description: 'Åtta näringsämnen i de former och doser forskningen pekar på. En sachet om dagen.',
    url: '/',
    siteName: 'DYGN',
    locale: 'sv_SE',
    type: 'website',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'DYGN Daily Nutrition-sachet i en hand' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DYGN — Daily Nutrition',
    description: 'Åtta näringsämnen i de former och doser forskningen pekar på. En sachet om dagen.',
    images: ['/og.jpg'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5f1e8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="sv"
      data-scroll-behavior="smooth"
      className={`light bg-background ${inter.variable} ${fraunces.variable}`}
    >
      <body className="font-sans antialiased">
        <CartProvider>{children}</CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
