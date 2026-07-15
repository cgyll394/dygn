import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Besley, Fraunces } from 'next/font/google'
import { CartProvider } from '@/components/cart/cart-context'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const besley = Besley({ subsets: ['latin'], variable: '--font-besley' })
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' })

export const metadata: Metadata = {
  title: 'DYGN — Daily Nutrition. Åtta näringsämnen. En sachet om dagen.',
  description:
    'Åtta näringsämnen i de former och doser forskningen pekar på. Inget revolutionerande. Bara det viktiga, varje dag. Formulerat för nordisk kost.',
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
