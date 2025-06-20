import { Metadata } from 'next'
import Team from "@/components/Team"

export const metadata: Metadata = {
  title: 'Nuestro Equipo',
  description: 'Conoce a los profesionales detrás de Softory. Somos un equipo de desarrolladores, diseñadores y estrategas apasionados por la tecnología y la innovación.',
  openGraph: {
    title: 'Nuestro Equipo | Softory',
    description: 'Conoce al equipo de expertos que transformará tu idea en una solución digital exitosa.',
  },
}

export default function EquipoPage() {
  return <Team />
} 