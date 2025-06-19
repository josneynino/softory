import { Metadata } from 'next'
import Projects from "@/components/Projects"

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Explora nuestro portafolio de proyectos. Aplicaciones web, móviles y soluciones digitales que hemos desarrollado para nuestros clientes.',
  openGraph: {
    title: 'Portafolio de Proyectos - Softory',
    description: 'Descubre los proyectos que hemos desarrollado. Aplicaciones web, móviles y soluciones digitales innovadoras.',
  },
}

export default function ProyectosPage() {
  return <Projects />
} 