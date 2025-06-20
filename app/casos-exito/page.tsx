import { Metadata } from 'next'
import SuccessCases from "@/components/SuccessCases"

export const metadata: Metadata = {
  title: 'Casos de Éxito',
  description: 'Descubre cómo hemos ayudado a empresas a alcanzar sus objetivos con soluciones de software a medida. Historias reales de éxito en Softory.',
  openGraph: {
    title: 'Casos de Éxito | Softory',
    description: 'Explora nuestros casos de éxito y mira los resultados que hemos generado para nuestros clientes.',
  },
}

export default function CasosExitoPage() {
  return <SuccessCases />
} 