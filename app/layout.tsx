import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Empire Tech - Digital Creator',
  description: 'Crafting immersive web experiences, compelling visual identities, and intelligent automation solutions.',
  keywords: 'web development, graphics design, bot development, react, next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 dark:from-[#0f172a] dark:to-[#1e293b]">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}