import type { Metadata } from 'next'
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Link from "next/link"
import Navbar from '@/components/Navbar'
import Breadcrumbs from '@/components/Breadcrumbs'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Softory - Desarrollo de Software',
    template: '%s | Softory',
  },
  description: 'Transformamos ideas en software escalable. Creamos soluciones digitales que impulsan el crecimiento de tu negocio.',
  keywords: [
    'desarrollo web',
    'apps móviles',
    'consultoría tecnológica',
    'software',
    'desarrollo de software',
    'agencia digital',
    'UX/UI',
    'Next.js',
    'React',
    'México',
  ],
  authors: [{ name: 'Jozney Developer', url: 'https://www.linkedin.com/in/jozneydeveloper' }],
  creator: 'Softory',
  openGraph: {
    title: 'Softory - Transformamos ideas en software escalable',
    description: 'Creamos soluciones digitales a medida para impulsar tu negocio',
    url: 'https://softory.com',
    siteName: 'Softory',
    images: [
      {
        url: '/assets/softory-logo.png',
        width: 600,
        height: 315,
        alt: 'Softory Logo',
      },
    ],
    type: 'website',
    locale: 'es_MX',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Softory - Transformamos ideas en software escalable',
    description: 'Creamos soluciones digitales a medida para impulsar tu negocio',
    site: '@softory_tech',
    creator: '@softory_tech',
    images: ['/assets/softory-logo.png'],
  },
  metadataBase: new URL('https://softory.com'),
  alternates: {
    canonical: 'https://softory.com',
  },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Softory',
  url: 'https://softory.com',
  logo: 'https://softory.com/assets/softory-logo.png',
  sameAs: [
    'https://www.linkedin.com/in/jozneydeveloper',
    'https://twitter.com/softory_tech',
    'https://github.com/jozneydeveloper',
    'https://www.instagram.com/softory_tech/'
  ],
  contactPoint: [{
    '@type': 'ContactPoint',
    email: 'contacto@softory.com',
    contactType: 'customer support',
    areaServed: 'MX',
    availableLanguage: ['Spanish', 'English']
  }],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ciudad de México',
    addressCountry: 'MX',
  },
  description: 'Transformamos ideas en software escalable. Creamos soluciones digitales que impulsan el crecimiento de tu negocio.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/softory-2.png" />
        <link rel="canonical" href="https://softory.com" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className={`${outfit.variable} ${plusJakarta.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 pt-16">
              <Breadcrumbs />
              <main id="main-content" tabIndex={-1}>
                {children}
              </main>
            </div>
            <Footer />
            <WhatsAppButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
