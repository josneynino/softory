"use client"

import { useState } from "react"
import { 
  Search, 
  Palette, 
  Code, 
  Settings, 
  ChevronRight, 
  CheckCircle,
  Clock,
  Users,
  FileText,
  Smartphone,
  Globe,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const processSteps = [
  {
    id: 1,
    step: "01",
    title: "Diagnóstico",
    description: "Analizamos tus necesidades y objetivos para crear la estrategia perfecta.",
    icon: Search,
    color: "blue",
    duration: "1-2 semanas",
    team: ["Project Manager", "Business Analyst"],
    deliverables: [
      "Análisis de requerimientos",
      "Documento de especificaciones",
      "Cronograma del proyecto",
      "Presupuesto detallado"
    ],
    examples: [
      {
        title: "E-commerce",
        description: "Análisis de productos, categorías, métodos de pago y logística"
      },
      {
        title: "App Móvil",
        description: "Estudio de usuarios, funcionalidades core y plataformas objetivo"
      }
    ],
    tools: ["Figma", "Miro", "Notion", "Google Analytics"]
  },
  {
    id: 2,
    step: "02",
    title: "Prototipado",
    description: "Diseñamos wireframes y prototipos para validar la solución contigo.",
    icon: Palette,
    color: "purple",
    duration: "2-3 semanas",
    team: ["UX/UI Designer", "Product Manager"],
    deliverables: [
      "Wireframes de baja fidelidad",
      "Prototipos interactivos",
      "Guía de diseño",
      "Flujos de usuario"
    ],
    examples: [
      {
        title: "Dashboard Admin",
        description: "Prototipos de paneles de control y gestión de datos"
      },
      {
        title: "App de Usuario",
        description: "Flujos de navegación y experiencias de usuario"
      }
    ],
    tools: ["Figma", "Adobe XD", "Sketch", "InVision"]
  },
  {
    id: 3,
    step: "03",
    title: "Desarrollo",
    description: "Construimos tu solución con metodologías ágiles y las mejores prácticas.",
    icon: Code,
    color: "green",
    duration: "4-12 semanas",
    team: ["Frontend Developer", "Backend Developer", "DevOps"],
    deliverables: [
      "Código fuente completo",
      "Documentación técnica",
      "Tests automatizados",
      "Deployment en producción"
    ],
    examples: [
      {
        title: "Frontend",
        description: "Interfaces responsivas con React/Next.js y TypeScript"
      },
      {
        title: "Backend",
        description: "APIs RESTful con Node.js y bases de datos escalables"
      }
    ],
    tools: ["React", "Next.js", "Node.js", "PostgreSQL", "Docker"]
  },
  {
    id: 4,
    step: "04",
    title: "Soporte",
    description: "Brindamos mantenimiento continuo y actualizaciones para tu proyecto.",
    icon: Settings,
    color: "orange",
    duration: "Continuo",
    team: ["Support Engineer", "DevOps Engineer"],
    deliverables: [
      "Monitoreo 24/7",
      "Actualizaciones de seguridad",
      "Optimizaciones de rendimiento",
      "Soporte técnico"
    ],
    examples: [
      {
        title: "Monitoreo",
        description: "Seguimiento de métricas, errores y rendimiento en tiempo real"
      },
      {
        title: "Mantenimiento",
        description: "Actualizaciones regulares, backups y optimizaciones"
      }
    ],
    tools: ["Sentry", "DataDog", "AWS", "GitHub Actions"]
  }
]

export default function Process() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <section id="proceso" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestro Proceso</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un enfoque estructurado que garantiza resultados excepcionales
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {processSteps.map((step) => {
            const IconComponent = step.icon
            const isActive = activeStep === step.id
            
            return (
              <Card 
                key={step.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  isActive ? 'ring-2 ring-blue-500 shadow-lg' : ''
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    isActive 
                      ? 'bg-blue-500 text-white' 
                      : `bg-${step.color}-100 text-${step.color}-600`
                  }`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-2">
                      {step.step}
                    </Badge>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>

                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {step.duration}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Active Step Details */}
        {processSteps.map((step) => {
          const IconComponent = step.icon
          if (activeStep !== step.id) return null

          return (
            <div key={step.id} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Details */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-${step.color}-100 text-${step.color}-600`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Team */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        Equipo Involucrado
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {step.team.map((member, index) => (
                          <Badge key={index} variant="secondary">
                            {member}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <FileText className="w-5 h-5 mr-2" />
                        Entregables
                      </h4>
                      <ul className="space-y-2">
                        {step.deliverables.map((deliverable, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Zap className="w-5 h-5 mr-2" />
                        Herramientas
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {step.tools.map((tool, index) => (
                          <Badge key={index} variant="outline">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Examples */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Ejemplos Concretos</h4>
                  <div className="space-y-4">
                    {step.examples.map((example, index) => (
                      <Card key={index} className="border-l-4 border-blue-500">
                        <CardContent className="p-4">
                          <h5 className="font-semibold text-gray-900 mb-2">{example.title}</h5>
                          <p className="text-gray-600 text-sm">{example.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Comenzar Proyecto
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
} 