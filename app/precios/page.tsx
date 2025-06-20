import { Metadata } from 'next'
import PricingPlans from "@/components/PricingPlans"

export const metadata: Metadata = {
  title: 'Planes y Precios',
  description: 'Encuentra el plan de desarrollo de software perfecto para tu negocio. Ofrecemos precios flexibles y transparentes para adaptarnos a tus necesidades y presupuesto.',
  openGraph: {
    title: 'Planes y Precios | Softory',
    description: 'Descubre nuestros planes de precios para desarrollo de software, consultoría y diseño UX/UI.',
  },
}

export default function PreciosPage() {
  return <PricingPlans />
} 