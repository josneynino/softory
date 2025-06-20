import { Metadata } from 'next'
import Methodology from "@/components/Methodology"

export const metadata: Metadata = {
  title: 'Nuestra Metodología',
  description: 'Descubre cómo trabajamos en Softory para garantizar el éxito de tu proyecto. Nuestro proceso paso a paso, desde el diagnóstico hasta el soporte.',
  openGraph: {
    title: 'Nuestra Metodología de Desarrollo | Softory',
    description: 'Conoce nuestro proceso de desarrollo de software, diseñado para la eficiencia, transparencia y resultados excepcionales.',
  },
}

export default function MetodologiaPage() {
  return <Methodology />
} 