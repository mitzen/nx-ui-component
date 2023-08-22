import './globals.css'
import { Providers } from '@/lib/providers'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import MainAppBar from '@/components/containers/navbar/MainNavBar'
import Copyright from '@/components/containers/footer/Copyright'
import { UserProvider } from '@auth0/nextjs-auth0/client';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Job search',
  description: 'Job search made easy.',
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
        <UserProvider>
          <MainAppBar></MainAppBar>
             {children}
          <Copyright/>
          </UserProvider>
        </body>
      </html>

    </Providers>
    )
  }
  