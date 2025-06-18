"use client"

import { Users, Globe, Heart, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const values = [
  {
    icon: TrendingUp,
    title: "Innovación",
    description: "Siempre buscamos nuevas formas de crear valor para nuestros clientes."
  },
  {
    icon: Globe,
    title: "Impacto",
    description: "Creamos soluciones que transforman negocios y mejoran la vida de las personas."
  },
  {
    icon: Heart,
    title: "Compromiso",
    description: "Nos apasiona la excelencia y el servicio al cliente."
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Trabajamos en equipo y con nuestros clientes para lograr grandes resultados."
  }
]

export default function AboutCompany() {
  return (
    <section id="sobre-softory" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre Softory</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Somos una empresa mexicana de tecnología dedicada a transformar ideas en software escalable y soluciones digitales de alto impacto.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Misión</h3>
            <p className="text-gray-700 mb-6">
              Impulsar el crecimiento de nuestros clientes a través de soluciones tecnológicas innovadoras, confiables y a la medida.
            </p>
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Visión</h3>
            <p className="text-gray-700">
              Ser la empresa líder en desarrollo de software y transformación digital en Latinoamérica, reconocida por la calidad, creatividad y resultados de nuestros proyectos.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-6">Nuestros Valores</h3>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, i) => {
                const Icon = value.icon
                return (
                  <Card key={i} className="text-center">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-2">
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 