import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Providers from '@/lib/providers'
import { Menu } from '@/components/Menu'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'COVIDBR',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <meta charSet="utf-8" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="grid grid-cols-1 bg-darkBlue-900 pt-[4.5rem] lg:grid-cols-[13rem_auto] lg:pt-0">
            <div className="overflow-hidden lg:h-screen">
              <Menu />
            </div>

            <div className="flex flex-col w-full mx-auto max-w-[1280px] bg-darkBlue-900 p-4 lg:p-6">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
