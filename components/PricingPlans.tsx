"use client"

import { CheckCircle, Zap, Star, Rocket } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const plans = [
  {
    icon: Zap,
    name: "Starter",
    price: "$9,900 MXN",
    description: "Ideal para emprendedores y pequeñas empresas que inician su presencia digital.",
    features: [
      "Sitio web institucional",
      "Hasta 5 secciones",
      "Diseño responsivo",
      "Formulario de contacto",
      "Soporte básico"
    ],
    cta: "Solicitar"
  },
  {
    icon: Star,
    name: "Pro",
    price: "$19,900 MXN",
    description: "Para empresas que buscan una solución más robusta y personalizada.",
    features: [
      "Todo lo de Starter",
      "Blog y recursos",
      "Integración con APIs",
      "Animaciones avanzadas",
      "Soporte prioritario"
    ],
    cta: "Solicitar"
  },
  {
    icon: Rocket,
    name: "Enterprise",
    price: "Desde $39,900 MXN",
    description: "Soluciones a la medida para empresas con necesidades avanzadas.",
    features: [
      "Todo lo de Pro",
      "Desarrollo a medida",
      "Integraciones complejas",
      "Consultoría personalizada",
      "Soporte premium"
    ],
    cta: "Solicitar demo"
  }
]

export default function PricingPlans() {
  return (
    <section id="precios" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Planes y Precios</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a las necesidades de tu empresa.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => {
            const Icon = plan.icon
            return (
              <Card key={i} className="text-center border-2 border-blue-100 hover:border-blue-600 transition-all">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <Icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-3xl font-extrabold text-blue-700 mb-2">{plan.price}</div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="mb-6 space-y-2">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center justify-center gap-2 text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold">
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
} 