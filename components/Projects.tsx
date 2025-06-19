"use client"

import { useState } from "react"
import { 
  Filter, 
  ExternalLink, 
  Github, 
  Star, 
  Users, 
  TrendingUp,
  Calendar,
  Code,
  Smartphone,
  Globe,
  Palette,
  ChevronRight,
  Quote,
  ShoppingCart
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"

const projectCategories = [
  { id: "all", label: "Todos", icon: Filter },
  { id: "web", label: "Web", icon: Globe },
  { id: "mobile", label: "Móvil", icon: Smartphone },
  { id: "design", label: "Diseño", icon: Palette },
  { id: "ecommerce", label: "E-commerce", icon: ShoppingCart }
]

const completedProjects = [
  {
    id: 1,
    title: "E-commerce Finzo",
    description: "Plataforma completa de comercio electrónico con gestión de inventario, pagos y análisis de ventas.",
    category: "ecommerce",
    image: "/assets/finzo-dashboard.jpg",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    status: "Completado",
    duration: "8 semanas",
    metrics: {
      users: "2,500+",
      revenue: "$45,000+",
      conversion: "3.2%",
      performance: "98%"
    },
    testimonial: {
      name: "María González",
      role: "CEO, Finzo",
      content: "Softory transformó completamente nuestro negocio. La plataforma superó nuestras expectativas y las ventas aumentaron un 150% en el primer mes.",
      rating: 5
    },
    links: {
      live: "https://finzo-web.vercel.app"
    }
  },
  {
    id: 2,
    title: "App de Gestión Restaurante",
    description: "Sistema integral para gestión de restaurantes con control de inventario, pedidos y reportes.",
    category: "mobile",
    image: "/assets/fuego-corte-dashboard.png",
    technologies: ["React Native", "Firebase", "Node.js"],
    status: "Completado",
    duration: "6 semanas",
    metrics: {
      users: "500+",
      orders: "15,000+",
      efficiency: "40%",
      satisfaction: "4.8/5"
    },
    testimonial: {
      name: "Carlos Rodríguez",
      role: "Propietario, Fuego & Corte",
      content: "La app revolucionó nuestro restaurante. Ahora gestionamos todo desde el móvil y hemos reducido errores en un 60%.",
      rating: 5
    },
    links: {
      live: "https://fuego-corte.vercel.app"
    }
  },
  {
    id: 3,
    title: "Glow Up Digital",
    description: "Plataforma integral de marketing digital y gestión de redes sociales para empresas que buscan potenciar su presencia online.",
    category: "web",
    image: "/assets/gud-dash.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Completado",
    duration: "12 semanas",
    metrics: {
      users: "800+",
      revenue: "$25,000+",
      engagement: "85%",
      growth: "200%"
    },
    testimonial: {
      name: "Sofia Ramírez",
      role: "CEO, Glow Up Digital",
      content: "Softory creó una plataforma que revolucionó nuestro negocio de marketing digital. La automatización y análisis de datos nos permitió escalar de manera increíble.",
      rating: 5
    },
    links: {
      live: "https://glow-up-digital.vercel.app/"
    }
  }
]

const inDevelopmentProjects = [
  {
    title: "Fuego & Corte",
    description: "Plataforma web para restaurante de cortes finos y parrilla, con sistema de reservaciones, menú digital y gestión de pedidos en línea.",
    image: "/assets/fuego-corte-dashboard.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "En desarrollo",
    progress: 75,
    link: "https://fuego-corte.vercel.app"
  },
  {
    title: "Finzo - Gestión Financiera",
    description: "Aplicación web para gestión financiera personal y empresarial, con seguimiento de ingresos, gastos, presupuestos y reportes financieros detallados.",
    image: "/assets/finzo-dashboard.jpg",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Zustand"],
    status: "En desarrollo",
    progress: 60,
    link: "https://finzo-web.vercel.app"
  },
  {
    title: "Glow Up Digital",
    description: "Plataforma integral de marketing digital y gestión de redes sociales para empresas que buscan potenciar su presencia online.",
    image: "/assets/gud-dash.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "En desarrollo",
    progress: 90,
    link: "https://glow-up-digital.vercel.app/"
  }
]

const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "CEO, Finzo",
    company: "Finzo",
    content: "Softory transformó completamente nuestro negocio. La plataforma superó nuestras expectativas y las ventas aumentaron un 150% en el primer mes. El equipo es profesional, comunicativo y entregó el proyecto a tiempo.",
    rating: 5,
    avatar: "/placeholder-user.jpg"
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Propietario",
    company: "Fuego & Corte",
    content: "La app revolucionó nuestro restaurante. Ahora gestionamos todo desde el móvil y hemos reducido errores en un 60%. El soporte post-lanzamiento ha sido excepcional.",
    rating: 5,
    avatar: "/placeholder-user.jpg"
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "CTO",
    company: "TechCorp",
    content: "El dashboard nos permite tomar decisiones basadas en datos en tiempo real. La interfaz es intuitiva y el rendimiento excepcional. Definitivamente volveremos a trabajar con Softory.",
    rating: 5,
    avatar: "/placeholder-user.jpg"
  }
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const filteredProjects = activeCategory === "all" 
    ? completedProjects 
    : completedProjects.filter(project => project.category === activeCategory)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ))
  }

  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Proyectos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones digitales que han transformado negocios y generado resultados excepcionales
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Users, label: "Clientes Satisfechos", value: "30+", color: "blue" },
            { icon: TrendingUp, label: "Proyectos Completados", value: "25+", color: "green" },
            { icon: Star, label: "Calificación Promedio", value: "4.9/5", color: "yellow" },
            { icon: Calendar, label: "Años de Experiencia", value: "5+", color: "purple" }
          ].map((metric, index) => {
            const IconComponent = metric.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-${metric.color}-100 text-${metric.color}-600`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </motion.div>
            )
          })}
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="flex items-center gap-2"
              >
                <IconComponent className="w-4 h-4" />
                {category.label}
              </Button>
            )
          })}
        </div>

        {/* Completed Projects Gallery */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Proyectos Completados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-video bg-gray-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold text-gray-900">{project.title}</h4>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {project.status}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-lg font-bold text-gray-900">{value}</div>
                            <div className="text-xs text-gray-600 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>

                      {/* Testimonial */}
                      <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Quote className="w-4 h-4 text-blue-600 mr-2" />
                          <div className="flex">
                            {renderStars(project.testimonial.rating)}
                          </div>
                        </div>
                        <p className="text-sm text-gray-700 italic mb-2">
                          "{project.testimonial.content}"
                        </p>
                        <div className="text-sm font-semibold text-gray-900">
                          {project.testimonial.name}
                        </div>
                        <div className="text-xs text-gray-600">
                          {project.testimonial.role}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Ver Proyecto
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Projects in Development */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">En Desarrollo</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {inDevelopmentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-semibold text-gray-900">{project.title}</h4>
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progreso</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Ver progreso
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Comenzar tu Proyecto
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
} 