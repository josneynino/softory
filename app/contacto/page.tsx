import { Metadata } from 'next'
import Contact from "@/components/Contact"

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contáctanos para discutir tu proyecto. Estamos aquí para ayudarte a transformar tus ideas en software escalable.',
  openGraph: {
    title: 'Contacto - Softory',
    description: 'Hablemos sobre tu proyecto. Nuestro equipo está listo para ayudarte a crear la solución digital que necesitas.',
  },
}

export default function ContactoPage() {
  return <Contact />
} 