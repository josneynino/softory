import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Softory - Desarrollo de Software',
  description: 'Transformamos ideas en software escalable. Creamos soluciones digitales que impulsan el crecimiento de tu negocio.',
  keywords: 'desarrollo web, apps móviles, consultoría tecnológica, software, desarrollo de software',
  authors: [{ name: 'Jozney Developer' }],
  openGraph: {
    title: 'Softory - Transformamos ideas en software escalable',
    description: 'Creamos soluciones digitales a medida para impulsar tu negocio',
    type: 'website',
    locale: 'es_MX',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
