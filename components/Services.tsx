"use client"

import { Code, Smartphone, Users, Palette, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

// Helper para gradiente de texto
const GradientText = ({ children }: { children: React.ReactNode }) => (
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-fuchsia-500">
    {children}
  </span>
);

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Desarrollo Web",
    description: "Creamos sitios web modernos y aplicaciones web progresivas.",
    longDescription: "Desarrollamos soluciones web personalizadas que combinan diseño atractivo con funcionalidad robusta. Nuestras aplicaciones web son rápidas, seguras y optimizadas para todos los dispositivos.",
    features: [
      "Diseño responsivo y adaptativo",
      "Optimización de rendimiento",
      "Integración con APIs y servicios",
      "Soporte para múltiples navegadores"
    ],
    examples: [
      "Sitios web corporativos",
      "Tiendas en línea",
      "Aplicaciones web progresivas",
      "Plataformas de contenido"
    ],
    image: "/assets/images/services/web-dev.svg"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Desarrollo Móvil",
    description: "Desarrollamos aplicaciones nativas y multiplataforma.",
    longDescription: "Creamos aplicaciones móviles que ofrecen una experiencia de usuario excepcional. Nuestras soluciones son nativas o multiplataforma, dependiendo de tus necesidades específicas.",
    features: [
      "Desarrollo nativo iOS y Android",
      "Aplicaciones multiplataforma",
      "Integración con servicios móviles",
      "Optimización de rendimiento"
    ],
    examples: [
      "Aplicaciones de comercio electrónico",
      "Plataformas de servicios",
      "Aplicaciones empresariales",
      "Juegos móviles"
    ],
    image: "/assets/images/services/mobile-dev.svg"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Consultoría Tecnológica",
    description: "Asesoramiento estratégico en tecnología y transformación digital.",
    longDescription: "Proporcionamos consultoría especializada para ayudar a las empresas a aprovechar al máximo la tecnología. Nuestro enfoque estratégico impulsa la innovación y el crecimiento.",
    features: [
      "Análisis de necesidades tecnológicas",
      "Arquitectura de soluciones",
      "Gestión de proyectos",
      "Optimización de procesos"
    ],
    examples: [
      "Transformación digital",
      "Migración a la nube",
      "Automatización de procesos",
      "Estrategia tecnológica"
    ],
    image: "/assets/images/services/consulting.svg"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Diseño UX/UI",
    description: "Creamos interfaces intuitivas y experiencias de usuario excepcionales.",
    longDescription: "Nuestro equipo de diseño crea interfaces que no solo se ven bien, sino que también son intuitivas y fáciles de usar. Nos enfocamos en la experiencia del usuario y la usabilidad.",
    features: [
      "Diseño de interfaces modernas",
      "Investigación de usuarios",
      "Prototipado y wireframing",
      "Pruebas de usabilidad"
    ],
    examples: [
      "Rediseño de interfaces",
      "Sistemas de diseño",
      "Experiencias móviles",
      "Diseño de productos digitales"
    ],
    image: "/assets/images/services/design.svg"
  }
]

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros <GradientText>Servicios</GradientText>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones tecnológicas integrales para impulsar tu negocio
          </p>
        </div>

        <div className="flex flex-row gap-4 max-w-7xl mx-auto overflow-x-auto pb-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden min-w-[300px] flex-1 border border-transparent hover:border-blue-500 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-50 to-fuchsia-50 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    <div className="text-blue-600 group-hover:text-fuchsia-600 transition-colors">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Características</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-600 text-sm">
                          <Check className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Casos de Uso</h4>
                    <ul className="space-y-2">
                      {service.examples.map((example, i) => (
                        <li key={i} className="flex items-center text-gray-600 text-sm">
                          <Check className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Image
                    src={service.image}
                    alt={`Ilustración de ${service.title}`}
                    width={300}
                    height={150}
                    className="rounded-xl shadow-md w-full h-auto"
                  />
                </div>

                <div className="mt-6">
                  <Button
                    variant="default"
                    className="w-full bg-gradient-to-r from-blue-600 to-fuchsia-600 hover:from-blue-700 hover:to-fuchsia-700 text-white focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300"
                    onClick={() => scrollToSection('projects')}
                    aria-label={`Ver proyectos de ${service.title}`}
                  >
                    Ver Proyectos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 