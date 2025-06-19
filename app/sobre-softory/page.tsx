import { Metadata } from 'next'
import AboutCompany from "@/components/AboutCompany"

export const metadata: Metadata = {
  title: 'Sobre Softory',
  description: 'Conoce nuestra misión, visión y valores. Somos una empresa de desarrollo de software comprometida con la innovación y la excelencia.',
  openGraph: {
    title: 'Sobre Softory - Nuestra Misión y Valores',
    description: 'Descubre quiénes somos, nuestra misión, visión y valores que nos impulsan a crear software de calidad.',
  },
}

export default function SobreSoftoryPage() {
  return <AboutCompany />
} 