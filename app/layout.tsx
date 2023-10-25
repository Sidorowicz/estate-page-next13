
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import MainLayoutFooter from './components/MainLayoutFooter'
import { MainLayoutNavbar } from './components/MainLayoutNavbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vortex',
  description: 'Real estate dummy page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </head>
      <body className={`${inter.className} d-flex flex-column min-vh-100`}>

        <MainLayoutNavbar />
        {children}

        <MainLayoutFooter />

      </body>
    </html>
  )
}
