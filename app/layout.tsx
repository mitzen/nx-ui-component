import './globals.css'
import { Providers } from '@/lib/providers'
import type { Metadata } from 'next'
import { ABeeZee, Inter } from 'next/font/google'
import MainAppBar from '@/components/containers/navbar/MainNavBar'
import Copyright from '@/components/containers/footer/Copyright'
import { Nav } from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <MainAppBar></MainAppBar>
             {children}

             <p> Nav element here </p>
          <Nav />
          <Copyright/>
        </body>
      </html>
    </Providers>
    )
  }
  