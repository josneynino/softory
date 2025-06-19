import { Metadata } from 'next'
import Services from "@/components/Services"

export const metadata: Metadata = {
  title: 'Nuestros Servicios',
  description: 'Desarrollo web, aplicaciones móviles, consultoría tecnológica y diseño UX/UI. Soluciones digitales a medida para tu negocio.',
  openGraph: {
    title: 'Servicios de Desarrollo de Software - Softory',
    description: 'Ofrecemos desarrollo web, móvil, consultoría y diseño UX/UI. Transformamos tus ideas en software escalable.',
  },
}

export default function ServiciosPage() {
  return <Services />
} 