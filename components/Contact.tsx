"use client"

import { useState } from "react"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Loader2,
  MessageSquare,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  MessageCircle,
  Instagram,
  Linkedin,
  Github
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Chatea con nosotros",
    value: "+52 51 5127 62",
    link: "https://wa.me/5251512762",
    color: "green",
    responseTime: "Respuesta inmediata"
  },
  {
    icon: Mail,
    title: "Email",
    description: "Envíanos un correo",
    value: "contacto@softory.com",
    link: "mailto:contacto@softory.com",
    color: "blue",
    responseTime: "Respuesta en 24h"
  },
  {
    icon: Phone,
    title: "Teléfono",
    description: "Llámanos directamente",
    value: "+52 51 5127 62",
    link: "tel:+5251512762",
    color: "purple",
    responseTime: "Lunes a Viernes 9AM-6PM"
  },
  {
    icon: MapPin,
    title: "Ubicación",
    description: "Visítanos",
    value: "Ciudad de México, México",
    link: "https://maps.google.com/?q=Ciudad+de+México",
    color: "orange",
    responseTime: "Citas previas"
  }
]

const businessHours = [
  { day: "Lunes", hours: "9:00 AM - 6:00 PM", status: "Abierto" },
  { day: "Martes", hours: "9:00 AM - 6:00 PM", status: "Abierto" },
  { day: "Miércoles", hours: "9:00 AM - 6:00 PM", status: "Abierto" },
  { day: "Jueves", hours: "9:00 AM - 6:00 PM", status: "Abierto" },
  { day: "Viernes", hours: "9:00 AM - 6:00 PM", status: "Abierto" },
  { day: "Sábado", hours: "10:00 AM - 2:00 PM", status: "Abierto" },
  { day: "Domingo", hours: "Cerrado", status: "Cerrado" }
]

const faqs = [
  {
    question: "¿Cuánto tiempo toma desarrollar una aplicación web?",
    answer: "El tiempo de desarrollo varía según la complejidad del proyecto. Una aplicación web básica puede tomar 4-8 semanas, mientras que proyectos más complejos pueden requerir 12-16 semanas. Te proporcionamos un cronograma detallado durante la fase de diagnóstico."
  },
  {
    question: "¿Ofrecen mantenimiento después del lanzamiento?",
    answer: "Sí, ofrecemos diferentes planes de mantenimiento que incluyen actualizaciones de seguridad, optimizaciones de rendimiento, soporte técnico y nuevas funcionalidades. Puedes elegir el plan que mejor se adapte a tus necesidades."
  },
  {
    question: "¿Qué tecnologías utilizan para el desarrollo?",
    answer: "Utilizamos las tecnologías más modernas y confiables: React, Next.js, TypeScript, Node.js, PostgreSQL, y más. Elegimos la stack tecnológica basándonos en los requerimientos específicos de tu proyecto."
  },
  {
    question: "¿Pueden trabajar con presupuestos limitados?",
    answer: "Absolutamente. Ofrecemos diferentes opciones de desarrollo que se adaptan a diversos presupuestos. Desde soluciones MVP hasta aplicaciones completas, trabajamos contigo para encontrar la mejor opción dentro de tu presupuesto."
  },
  {
    question: "¿Proporcionan hosting y dominio?",
    answer: "Sí, ofrecemos servicios completos que incluyen hosting, dominio, SSL, y deployment. También podemos trabajar con tu proveedor de hosting existente si lo prefieres."
  },
  {
    question: "¿Cómo es el proceso de comunicación durante el desarrollo?",
    answer: "Mantenemos comunicación constante a través de reuniones semanales, actualizaciones regulares, y acceso a herramientas de seguimiento del proyecto. Siempre estás informado del progreso."
  }
]

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/softory_tech/",
    color: "pink"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/jozneydeveloper",
    color: "blue"
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/jozneydeveloper",
    color: "gray"
  }
]

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formMessage, setFormMessage] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('loading')
    
    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        company: formData.get('company'),
        projectType: formData.get('projectType'),
        budget: formData.get('budget'),
        message: formData.get('message')
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      
      const result = await response.json()
      
      if (response.ok) {
        setFormStatus('success')
        setFormMessage('¡Gracias por tu mensaje! Te responderemos en las próximas 24 horas.')
        e.currentTarget.reset()
      } else {
        throw new Error(result.error || 'Error al enviar el mensaje')
      }
    } catch (error) {
      console.error('Error:', error)
      setFormStatus('error')
      setFormMessage(
        error instanceof Error 
          ? `Error: ${error.message}. Por favor, intenta de nuevo o contáctanos directamente.`
          : 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctanos directamente.'
      )
    }
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Listo para transformar tu idea en realidad? Estamos aquí para ayudarte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Columna izquierda: Métodos de contacto y redes sociales */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Información de Contacto</h3>
            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${method.color}-100 text-${method.color}-600`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-1">{method.title}</h4>
                            <p className="text-gray-600 mb-2">{method.description}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-900 font-medium">{method.value}</span>
                              <Badge variant="outline" className="text-xs">
                                {method.responseTime}
                              </Badge>
                            </div>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="mt-3"
                              asChild
                            >
                              <a href={method.link} target="_blank" rel="noopener noreferrer">
                                Contactar
                                <ExternalLink className="ml-2 h-4 w-4" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      asChild
                      className="w-12 h-12"
                    >
                      <a href={social.url} target="_blank" rel="noopener noreferrer">
                        <IconComponent className="w-5 h-5" />
                      </a>
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Columna derecha: Horario de Atención */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Horario de Atención</h3>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-900">{schedule.day}</span>
                      <div className="text-right">
                        <span className="text-gray-600">{schedule.hours}</span>
                        <Badge 
                          variant={schedule.status === "Abierto" ? "default" : "secondary"}
                          className="ml-2 text-xs"
                        >
                          {schedule.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Preguntas Frecuentes</h3>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between text-left"
                    >
                      <h4 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h4>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-gray-100"
                        >
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 