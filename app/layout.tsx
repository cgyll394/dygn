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

export const metadata: Metadata = {
  title: 'DYGN — Daily Nutrition. Åtta näringsämnen. En sachet om dagen.',
  description:
    'Åtta näringsämnen i de former och doser forskningen pekar på. Inget revolutionerande. Bara det viktiga, varje dag. Formulerat för nordisk kost.',
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
    <html lang="sv" className={`light bg-background ${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">
        <CartProvider>{children}</CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
