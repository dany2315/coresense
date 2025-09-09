import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Core-Sense - Transformation Digitale Premium',
  description: 'Expertise en transformation digitale, IA et innovation technologique',
  keywords: 'transformation digitale, IA, innovation, technologie, Core-Sense',
  authors: [{ name: 'Core-Sense' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}