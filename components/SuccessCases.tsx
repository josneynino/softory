"use client"

import { Award, TrendingUp, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const cases = [
  {
    company: "Finzo",
    logo: "/assets/logo-finzo1.png",
    title: "Plataforma de Finanzas Digitales",
    result: "+150% ventas en 1 mes",
    description: "Desarrollamos una plataforma fintech que permitió a Finzo escalar su operación y aumentar sus ventas en tiempo récord.",
    metric: "+150% ventas",
    award: true
  },
  {
    company: "Fuego & Corte",
    logo: "/assets/logo-fuego-corte.png",
    title: "App de Gestión para Restaurantes",
    result: "-60% errores operativos",
    description: "Creamos una app móvil para la gestión de pedidos y operaciones, reduciendo errores y mejorando la experiencia del cliente.",
    metric: "-60% errores",
    award: false
  },
  {
    company: "Looksy Moda",
    logo: "/assets/logo-looksy.png",
    title: "E-commerce de Moda",
    result: "+200% tráfico web",
    description: "Implementamos una tienda online moderna y campañas de marketing digital, logrando un crecimiento exponencial en visitas y ventas.",
    metric: "+200% tráfico",
    award: false
  }
]

export default function SuccessCases() {
  return (
    <section id="casos-exito" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Casos de Éxito</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Historias reales de clientes que lograron resultados extraordinarios con Softory.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <Card key={i} className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <img src={c.logo} alt={`Logo de ${c.company}`} className="h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-600 mb-4">{c.description}</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 font-semibold">{c.result}</span>
                  {c.award && <Award className="w-5 h-5 text-yellow-500" />}
                </div>
                <div className="text-xs text-gray-400">{c.company}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 