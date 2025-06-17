"use client"

import { useState, useEffect, useCallback } from "react"
import { Menu, X, Code, Smartphone, Users, Palette, ArrowRight, Star, Mail, Phone, MapPin, Send, Loader2, ArrowUp, ChevronLeft, ChevronRight, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import useEmblaCarousel from 'embla-carousel-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from "next-themes"

// Componente de animación para secciones
const SectionAnimation = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
)

export default function SoftoryLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formMessage, setFormMessage] = useState('')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const { theme, setTheme } = useTheme()

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "servicios", "proceso", "proyectos", "testimonios", "contacto"]
      const scrollPosition = window.scrollY + 100

      // Mostrar/ocultar botón de volver arriba
      setShowScrollTop(window.scrollY > 500)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('loading')
    
    try {
      const formData = new FormData(e.currentTarget)
      const response = await fetch('https://formspree.io/f/xldnnqgq', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setFormStatus('success')
        setFormMessage('¡Gracias por tu mensaje! Te responderemos pronto.')
        e.currentTarget.reset()
      } else {
        throw new Error('Error al enviar el mensaje')
      }
    } catch (error) {
      setFormStatus('error')
      setFormMessage('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.')
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Soft<span className="text-blue-600 dark:text-blue-400">ory</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-baseline space-x-8">
                {[
                  { id: "inicio", label: "Inicio" },
                  { id: "servicios", label: "Servicios" },
                  { id: "proceso", label: "Proceso" },
                  { id: "proyectos", label: "Proyectos" },
                  { id: "testimonios", label: "Testimonios" },
                  { id: "contacto", label: "Contacto" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              {/* Theme Toggle Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="ml-4"
                aria-label="Cambiar tema"
              >
                {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              {/* Theme Toggle Button for Mobile */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label="Cambiar tema"
              >
                {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: "inicio", label: "Inicio" },
                { id: "servicios", label: "Servicios" },
                { id: "proceso", label: "Proceso" },
                { id: "proyectos", label: "Proyectos" },
                { id: "testimonios", label: "Testimonios" },
                { id: "contacto", label: "Contacto" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <SectionAnimation>
        <section id="inicio" className="pt-16 pb-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  Transformamos ideas en <span className="text-blue-600 dark:text-blue-400">software escalable</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  En Softory creamos soluciones digitales a medida: aplicaciones web, móviles y consultoría tecnológica
                  para impulsar tu negocio.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => scrollToSection("contacto")}
                    className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 text-lg"
                  >
                    Solicita una demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection("servicios")}
                    className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 text-lg"
                  >
                    Ver servicios
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionAnimation>

      {/* Services Section */}
      <SectionAnimation delay={0.2}>
        <section id="servicios" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Nuestros Servicios</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Ofrecemos soluciones tecnológicas integrales para llevar tu negocio al siguiente nivel
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Code className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
                  title: "Desarrollo Web",
                  description: "Aplicaciones web modernas, rápidas y escalables con las últimas tecnologías.",
                },
                {
                  icon: <Smartphone className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
                  title: "Apps Móviles",
                  description: "Desarrollo nativo para iOS y Android con experiencia de usuario excepcional.",
                },
                {
                  icon: <Users className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
                  title: "Consultoría Tech",
                  description: "Asesoramiento estratégico para optimizar tu arquitectura tecnológica.",
                },
                {
                  icon: <Palette className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
                  title: "Diseño UI/UX",
                  description: "Interfaces intuitivas y atractivas que mejoran la experiencia del usuario.",
                },
              ].map((service, index) => (
                <Card key={index} className="border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </SectionAnimation>

      {/* Process Section */}
      <SectionAnimation delay={0.4}>
        <section id="proceso" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Nuestro Proceso</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Un enfoque estructurado que garantiza resultados excepcionales
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Diagnóstico",
                  description: "Analizamos tus necesidades y objetivos para crear la estrategia perfecta.",
                },
                {
                  step: "02",
                  title: "Prototipado",
                  description: "Diseñamos wireframes y prototipos para validar la solución contigo.",
                },
                {
                  step: "03",
                  title: "Desarrollo",
                  description: "Construimos tu solución con metodologías ágiles y las mejores prácticas.",
                },
                {
                  step: "04",
                  title: "Soporte",
                  description: "Brindamos mantenimiento continuo y actualizaciones para tu proyecto.",
                },
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{process.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{process.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-200 dark:bg-blue-700 transform translate-x-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionAnimation>

      {/* Projects Section */}
      <SectionAnimation delay={0.6}>
        <section id="proyectos" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Proyectos Destacados</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Algunos de nuestros trabajos más recientes que demuestran nuestra experiencia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "E-commerce Moderno",
                  description: "Plataforma de comercio electrónico con panel administrativo completo y pasarela de pagos integrada.",
                  image: "/placeholder.svg?height=300&width=400",
                  tags: ["React", "Node.js", "MongoDB"],
                  link: "https://github.com/jozneydeveloper"
                },
                {
                  title: "App de Gestión",
                  description: "Aplicación móvil para gestión de inventarios con sincronización en tiempo real y reportes avanzados.",
                  image: "/placeholder.svg?height=300&width=400",
                  tags: ["React Native", "Firebase", "TypeScript"],
                  link: "https://github.com/jozneydeveloper"
                },
                {
                  title: "Dashboard Analytics",
                  description: "Panel de control con visualizaciones interactivas para análisis de datos empresariales.",
                  image: "/placeholder.svg?height=300&width=400",
                  tags: ["Vue.js", "Python", "PostgreSQL"],
                  link: "https://github.com/jozneydeveloper"
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    <div className="aspect-video bg-gray-100 dark:bg-gray-800">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          Ver proyecto
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </SectionAnimation>

      {/* Testimonials Section */}
      <SectionAnimation delay={0.8}>
        <section id="testimonios" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Lo que dicen nuestros clientes</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                La satisfacción de nuestros clientes es nuestra mejor carta de presentación
              </p>
            </div>

            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {[
                    {
                      name: "María González",
                      position: "CEO, TechStart",
                      avatar: "/placeholder.svg?height=80&width=80",
                      content: "Softory transformó completamente nuestra presencia digital. El equipo es profesional y los resultados superaron nuestras expectativas.",
                      rating: 5,
                    },
                    {
                      name: "Carlos Ruiz",
                      position: "Director, InnovateCorp",
                      avatar: "/placeholder.svg?height=80&width=80",
                      content: "La aplicación móvil que desarrollaron ha aumentado nuestra productividad en un 40%. Excelente trabajo y soporte continuo.",
                      rating: 5,
                    },
                    {
                      name: "Ana Martínez",
                      position: "Fundadora, GrowthLab",
                      avatar: "/placeholder.svg?height=80&width=80",
                      content: "Profesionales excepcionales. Entendieron perfectamente nuestra visión y la convirtieron en una solución tecnológica robusta.",
                      rating: 5,
                    },
                  ].map((testimonial, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] p-4">
                      <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 h-full">
                        <CardContent className="p-8">
                          <div className="flex mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                          <div className="flex items-center">
                            <img
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full mr-4"
                              loading="lazy"
                            />
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                              <p className="text-gray-600 dark:text-gray-300 text-sm">{testimonial.position}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-900 shadow-lg rounded-full border-gray-200 dark:border-gray-700"
                onClick={scrollPrev}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-900 shadow-lg rounded-full border-gray-200 dark:border-gray-700"
                onClick={scrollNext}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </SectionAnimation>

      {/* Contact Section */}
      <SectionAnimation delay={1}>
        <section id="contacto" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">¿Listo para comenzar?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Contáctanos y descubre cómo podemos ayudarte a transformar tu idea en realidad
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="border-gray-200 dark:border-gray-800">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Envíanos un mensaje</h3>
                    <form 
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      {formStatus === 'success' && (
                        <div className="bg-green-50 dark:bg-green-900/50 text-green-700 dark:text-green-300 p-4 rounded-lg mb-4">
                          {formMessage}
                        </div>
                      )}
                      {formStatus === 'error' && (
                        <div className="bg-red-50 dark:bg-red-900/50 text-red-700 dark:text-red-300 p-4 rounded-lg mb-4">
                          {formMessage}
                        </div>
                      )}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Nombre completo
                        </label>
                        <Input 
                          id="name" 
                          name="name"
                          type="text" 
                          placeholder="Tu nombre" 
                          className="w-full bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white" 
                          required
                          disabled={formStatus === 'loading'}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Correo electrónico
                        </label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email" 
                          placeholder="tu@email.com" 
                          className="w-full bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white" 
                          required
                          disabled={formStatus === 'loading'}
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Mensaje
                        </label>
                        <Textarea 
                          id="message" 
                          name="message"
                          placeholder="Cuéntanos sobre tu proyecto..." 
                          rows={5} 
                          className="w-full bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white" 
                          required
                          disabled={formStatus === 'loading'}
                        />
                      </div>
                      <Button 
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white"
                        disabled={formStatus === 'loading'}
                      >
                        {formStatus === 'loading' ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            Enviar mensaje
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Información de contacto</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1 mr-4" />
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                        <p className="text-gray-600 dark:text-gray-300">jozneydeveloper@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1 mr-4" />
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Teléfono</h4>
                        <p className="text-gray-600 dark:text-gray-300">+52 5151 2762</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1 mr-4" />
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Ubicación</h4>
                        <p className="text-gray-600 dark:text-gray-300">Cdmx, Mexico</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-4">Síguenos</h4>
                  <div className="flex space-x-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                      asChild
                    >
                      <a 
                        href="https://www.linkedin.com/in/jozneydeveloper" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Visitar LinkedIn"
                      >
                        LinkedIn
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                      asChild
                    >
                      <a 
                        href="https://wa.me/5251512762" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Contactar por WhatsApp"
                      >
                        WhatsApp
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                      asChild
                    >
                      <a 
                        href="https://twitter.com/jozneydeveloper" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Visitar Twitter"
                      >
                        Twitter
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionAnimation>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gray-900 dark:bg-black text-white py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                Soft<span className="text-blue-400">ory</span>
              </h3>
              <p className="text-gray-300 mb-4 max-w-md">
                Transformamos ideas en software escalable. Creamos soluciones digitales que impulsan el crecimiento de
                tu negocio.
              </p>
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  asChild
                >
                  <a 
                    href="https://www.linkedin.com/in/jozneydeveloper" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visitar LinkedIn"
                  >
                    LinkedIn
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  asChild
                >
                  <a 
                    href="https://wa.me/5251512762" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Contactar por WhatsApp"
                  >
                    WhatsApp
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  asChild
                >
                  <a 
                    href="https://twitter.com/jozneydeveloper" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visitar Twitter"
                  >
                    Twitter
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Desarrollo Web</li>
                <li>Apps Móviles</li>
                <li>Consultoría Tech</li>
                <li>Diseño UI/UX</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-300">
                <li>jozneydeveloper@gmail.com</li>
                <li>+52 5151 2762</li>
                <li>Cdmx, Mexico</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Softory. Todos los derechos reservados.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
