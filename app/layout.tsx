import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { Footer } from '../components/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Atlas de Parasitología',
  description: 'Un atlas interactivo de parásitos intestinales',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 shadow-md">
          <div className="max-w-7xl mx-auto">
            <Link href="/" className="text-2xl font-bold text-white hover:text-purple-200 transition-colors">
              Atlas de Parasitología
            </Link>
          </div>
        </header>
        <main className="max-w-7xl mx-auto p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

