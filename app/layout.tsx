import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Besley, Fraunces } from 'next/font/google'
import { CartProvider } from '@/components/cart/cart-context'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const besley = Besley({ subsets: ['latin'], variable: '--font-besley' })
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' })

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3001'),
  ),
  title: 'DYGN · Daily Nutrition. Åtta näringsämnen. En sachet om dagen.',
  description:
    'Åtta näringsämnen i rätt form och rätt dos. Förklarat, dokumenterat och tredjepartstestat. Bara det viktiga, varje dag. Formulerat för nordisk kost.',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'DYGN · Daily Nutrition',
    description: 'Åtta näringsämnen i rätt form och rätt dos. En sachet om dagen.',
    url: '/',
    siteName: 'DYGN',
    locale: 'sv_SE',
    type: 'website',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'DYGN Daily Nutrition-sachet' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DYGN · Daily Nutrition',
    description: 'Åtta näringsämnen i rätt form och rätt dos. En sachet om dagen.',
    images: ['/og.jpg'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f2efe6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="sv"
      className={`light bg-background ${inter.variable} ${besley.variable} ${fraunces.variable}`}
    >
      <body className="font-sans antialiased">
        <CartProvider>{children}</CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
