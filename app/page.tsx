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
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
      }

      console.log('Enviando datos:', data)

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      
      const result = await response.json()
      console.log('Respuesta del servidor:', result)
      
      if (response.ok) {
        setFormStatus('success')
        setFormMessage('¡Gracias por tu mensaje! Te responderemos pronto.')
        e.currentTarget.reset()
      } else {
        throw new Error(result.error || 'Error al enviar el mensaje')
      }
    } catch (error) {
      console.error('Error detallado:', error)
      setFormStatus('error')
      setFormMessage(
        error instanceof Error 
          ? `Error: ${error.message}. Por favor, intenta de nuevo o contáctanos directamente por email o teléfono.`
          : 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctanos directamente por email o teléfono.'
      )
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">En Desarrollo</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Proyectos que estamos construyendo actualmente con las últimas tecnologías
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Fuego & Corte",
                  description: "Plataforma web para restaurante de cortes finos y parrilla, con sistema de reservaciones, menú digital y gestión de pedidos en línea. Desarrollado con Next.js.",
                  image: "/assets/fuego-corte-dashboard.png",
                  tags: ["Next.js", "TypeScript", "Tailwind CSS"],
                  status: "En desarrollo",
                  link: "https://fuego-corte.vercel.app"
                },
                {
                  title: "Finzo - Gestión Financiera",
                  description: "Aplicación web para gestión financiera personal y empresarial, con seguimiento de ingresos, gastos, presupuestos y reportes financieros detallados.",
                  image: "/assets/finzo-dashboard.jpg",
                  tags: ["React.js", "TypeScript", "Firebase", "Tailwind CSS", "Zustand"],
                  status: "En desarrollo",
                  link: "https://finzo-web.vercel.app"
                },
                {
                  title: "E-commerce Moderno",
                  description: "Plataforma de comercio electrónico con panel administrativo completo y pasarela de pagos integrada. En desarrollo con React y Node.js.",
                  image: "/placeholder.svg?height=300&width=400",
                  tags: ["React", "Node.js", "MongoDB"],
                  status: "En desarrollo",
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
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                        <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm rounded-full">
                          {project.status}
                        </span>
                      </div>
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
                          Ver progreso
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

      {/* Contact Section */}
      <SectionAnimation delay={1}>
        <section id="contacto" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">¿Listo para comenzar?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Contáctanos directamente por cualquiera de estos medios
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* WhatsApp */}
              <Card className="border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <svg className="h-12 w-12 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">WhatsApp</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Chatea con nosotros</p>
                  <Button 
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                    asChild
                  >
                    <a 
                      href="https://wa.me/5251512762" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Enviar mensaje
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <Mail className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Escríbenos un correo</p>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    asChild
                  >
                    <a 
                      href="mailto:jozneydeveloper@gmail.com"
                    >
                      Enviar email
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Teléfono */}
              <Card className="border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <Phone className="h-12 w-12 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Teléfono</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Llámanos directamente</p>
                  <Button 
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    asChild
                  >
                    <a 
                      href="tel:+5251512762"
                    >
                      Llamar ahora
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Instagram */}
              <Card className="border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <svg className="h-12 w-12 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Instagram</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Síguenos en Instagram</p>
                  <Button 
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white"
                    asChild
                  >
                    <a 
                      href="https://www.instagram.com/softory_tech/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Ver perfil
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </SectionAnimation>

      {/* Empresas que han confiado en nosotros */}
      <SectionAnimation delay={0.8}>
        <section id="empresas" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Empresas que han confiado en nosotros</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Estas son algunas de las empresas con las que hemos trabajado y colaborado
              </p>
            </div>
            <div className="overflow-x-auto">
              <div className="flex gap-8 items-center justify-center min-w-[600px]">
                {/* Logo 1 */}
                <div className="flex-shrink-0">
                  <div className="flex flex-col items-center">
                    <img
                      src="/assets/logo-looksy.png"
                      alt="Logo Looksy"
                      className="h-16 w-32 object-contain grayscale hover:grayscale-0 transition-all duration-300 bg-white rounded-xl shadow p-2 border border-gray-200"
                    />
                    <span className="mt-2 text-sm font-semibold text-gray-700">Looksy Moda</span>
                  </div>
                </div>
                {/* Logo 2 */}
                <div className="flex-shrink-0">
                  <div className="flex flex-col items-center">
                    <img
                      src="/assets/logo-finzo1.png"
                      alt="Logo Finzo"
                      className="h-16 w-32 object-contain grayscale hover:grayscale-0 transition-all duration-300 bg-white rounded-xl shadow p-2 border border-gray-200"
                    />
                    <span className="mt-2 text-sm font-semibold text-gray-700">Finzo</span>
                  </div>
                </div>
                {/* Logo 3 */}
                <div className="flex-shrink-0">
                  <div className="flex flex-col items-center">
                    <img
                      src="/assets/logo-fuego-corte.png"
                      alt="Logo Fuego Corte"
                      className="h-16 w-32 object-contain grayscale hover:grayscale-0 transition-all duration-300 bg-white rounded-xl shadow p-2 border border-gray-200"
                    />
                    <span className="mt-2 text-sm font-semibold text-gray-700">Fuego & Corte</span>
                  </div>
                </div>
                {/* Logo 4 */}
                <div className="flex-shrink-0">
                  <div className="flex flex-col items-center">
                    <img
                      src="/assets/logo-nivelar.png"
                      alt="Logo Nivelar"
                      className="h-16 w-32 object-contain grayscale hover:grayscale-0 transition-all duration-300 bg-white rounded-xl shadow p-2 border border-gray-200"
                    />
                    <span className="mt-2 text-sm font-semibold text-gray-700">Nivelar</span>
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
