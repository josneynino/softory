"use client"

import { ArrowRight, CheckCircle, Search, Code, Rocket, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const steps = [
  {
    icon: Search,
    title: "Diagnóstico",
    description: "Analizamos tus necesidades y objetivos para definir la mejor solución."
  },
  {
    icon: Users,
    title: "Propuesta",
    description: "Presentamos una propuesta personalizada con alcance, tiempos y costos."
  },
  {
    icon: Code,
    title: "Desarrollo",
    description: "Creamos tu solución con tecnologías modernas y metodologías ágiles."
  },
  {
    icon: CheckCircle,
    title: "Entrega y Pruebas",
    description: "Validamos el producto contigo y realizamos pruebas de calidad."
  },
  {
    icon: Rocket,
    title: "Lanzamiento y Soporte",
    description: "Publicamos tu proyecto y te acompañamos con soporte y mejoras continuas."
  }
]

export default function Methodology() {
  return (
    <section id="metodologia" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestra Metodología</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Así trabajamos en Softory para garantizar el éxito de tu proyecto.
          </p>
        </div>
        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <Card key={i} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <Icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                  {i < steps.length - 1 && (
                    <ArrowRight className="mx-auto mt-4 text-blue-300 w-6 h-6" />
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
} 