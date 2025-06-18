"use client"

import { useState, useEffect, useCallback, lazy, Suspense } from "react"
import { Menu, X, Code, Smartphone, Users, Palette, ArrowRight, Star, Mail, Phone, MapPin, Send, Loader2, ArrowUp, ChevronLeft, ChevronRight, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import useEmblaCarousel from 'embla-carousel-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from "next-themes"
import dynamic from 'next/dynamic'
import Services from "@/components/Services"
import Process from "@/components/Process"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Team from "@/components/Team"
import WhatsAppButton from "@/components/WhatsAppButton"
import Footer from "@/components/Footer"
import AboutCompany from "@/components/AboutCompany"
import SuccessCases from "@/components/SuccessCases"
import PricingPlans from "@/components/PricingPlans"
import Methodology from "@/components/Methodology"

// Lazy load heavy components
const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  loading: () => <div className="animate-pulse h-96 bg-gray-100 dark:bg-gray-800 rounded-lg" />
})

const ProjectCarousel = dynamic(() => import('@/components/ProjectCarousel'), {
  loading: () => <div className="animate-pulse h-64 bg-gray-100 dark:bg-gray-800 rounded-lg" />
})

// Optimized animation component
const SectionAnimation = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
)

// Memoized navigation items
const NAV_ITEMS = [
  { id: "inicio", label: "Inicio", icon: Sun },
  { id: "servicios", label: "Nuestros Servicios", icon: Code },
  { id: "proceso", label: "Proceso", icon: ArrowRight },
  { id: "proyectos", label: "Proyectos", icon: Star },
  { id: "equipo", label: "Equipo", icon: Users },
  { id: "contacto", label: "Contacto", icon: Mail },
] as const

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

  // Optimized scroll handler with debounce
  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId)

      timeoutId = setTimeout(() => {
        const sections = NAV_ITEMS.map(item => item.id)
        const scrollPosition = window.scrollY + 100

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
      }, 100)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

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
    <div className="min-h-screen bg-white transition-colors duration-200">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50"
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">
                Soft<span className="text-blue-600">ory</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-baseline space-x-4">
                {NAV_ITEMS.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`relative flex items-center gap-2 px-4 py-2 text-base font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400
                        ${activeSection === item.id
                          ? "text-blue-700"
                          : "text-gray-700 hover:text-blue-600"}
                      `}
                      aria-current={activeSection === item.id ? "page" : undefined}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                      {item.label}
                      {activeSection === item.id && (
                        <span className="absolute left-0 right-0 -bottom-1 h-1 bg-blue-600 rounded-full animate-pulse" />
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100"
            >
              <div className="px-2 pt-2 pb-3 space-y-2">
                {NAV_ITEMS.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center gap-2 w-full text-left px-4 py-3 text-base font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400
                        ${activeSection === item.id
                          ? "text-blue-700 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600"}
                      `}
                      aria-current={activeSection === item.id ? "page" : undefined}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                      {item.label}
                    </button>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <SectionAnimation>
        <section id="inicio" className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="text-center lg:text-left">
                {/* Stats */}
                <div className="flex justify-center lg:justify-start gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 font-display">50+</div>
                    <div className="text-sm text-gray-600">Proyectos Completados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 font-display">30+</div>
                    <div className="text-sm text-gray-600">Clientes Satisfechos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 font-display">5+</div>
                    <div className="text-sm text-gray-600">Años de Experiencia</div>
                  </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight font-display tracking-tight">
                  Transformamos ideas en <span className="text-blue-600">software escalable</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-sans">
                  En Softory creamos soluciones digitales a medida: aplicaciones web, móviles y consultoría tecnológica
                  para impulsar tu negocio.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8">
                  <a
                    href="#contacto"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Iniciar Proyecto
                  </a>
                  <a
                    href="#proyectos"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary border-2 border-primary rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    Ver Proyectos
                  </a>
                </div>
              </div>

              {/* Right Column - Illustration */}
              <div className="relative">
                <div className="relative z-10">
                  <img
                    src="/assets/images/hero-illustration.svg"
                    alt="Desarrollo de Software"
                    className="w-full h-auto max-w-lg mx-auto transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Floating Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-float"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-float animation-delay-2000"></div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
        </section>
      </SectionAnimation>

      {/* About Company Section */}
      <AboutCompany />
      {/* Methodology Section */}
      <Methodology />
      {/* Success Cases Section */}
      <SuccessCases />
      {/* Pricing Plans Section */}
      <PricingPlans />

      {/* Services Section */}
      <Services />

      {/* Process Section */}
      <Process />

      {/* Projects Section */}
      <Projects />

      {/* Team Section */}
      <Team />

      {/* Contact Section */}
      <Contact />

      {/* Empresas que han confiado en nosotros */}
      <SectionAnimation delay={0.8}>
        <section id="empresas" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Empresas que han confiado en nosotros</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                      alt="Logo de Looksy Moda"
                      className="h-16 w-32 object-contain grayscale hover:grayscale-0 transition-all duration-300 bg-white rounded-xl shadow p-2 border border-gray-300 hover:border-blue-700"
                    />
                    <span className="mt-2 text-sm font-semibold text-gray-700">Looksy Moda</span>
                  </div>
                </div>
                {/* Logo 2 */}
                <div className="flex-shrink-0">
                  <div className="flex flex-col items-center">
                    <img
                      src="/assets/logo-finzo1.png"
                      alt="Logo de Finzo"
                      className="h-16 w-32 object-contain grayscale hover:grayscale-0 transition-all duration-300 bg-white rounded-xl shadow p-2 border border-gray-300 hover:border-blue-700"
                    />
                    <span className="mt-2 text-sm font-semibold text-gray-700">Finzo</span>
                  </div>
                </div>
                {/* Logo 3 */}
                <div className="flex-shrink-0">
                  <div className="flex flex-col items-center">
                    <img
                      src="/assets/logo-fuego-corte.png"
                      alt="Logo de Fuego & Corte"
                      className="h-16 w-32 object-contain grayscale hover:grayscale-0 transition-all duration-300 bg-white rounded-xl shadow p-2 border border-gray-300 hover:border-blue-700"
                    />
                    <span className="mt-2 text-sm font-semibold text-gray-700">Fuego & Corte</span>
                  </div>
                </div>
                {/* Logo 4 */}
                <div className="flex-shrink-0">
                  <div className="flex flex-col items-center">
                    <img
                      src="/assets/logo-nivelar.png"
                      alt="Logo de Nivelar"
                      className="h-16 w-32 object-contain grayscale hover:grayscale-0 transition-all duration-300 bg-white rounded-xl shadow p-2 border border-gray-300 hover:border-blue-700"
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
      <Footer />

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-8 p-3 rounded-full bg-blue-700 text-white shadow-lg hover:bg-blue-800 transition-colors z-40 focus:outline-none focus:ring-4 focus:ring-blue-300"
            aria-label="Volver arriba"
          >
            <ArrowUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

