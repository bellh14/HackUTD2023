import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './(Shared-Components)/NavBar'
import FooterBar from './(Shared-Components)/FooterBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hack UTD',
  description: 'Hack UTD challenge submission',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}

        <FooterBar />
        
      </body>
      
        
    </html>
  )
}
