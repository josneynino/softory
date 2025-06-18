"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formMessage, setFormMessage] = useState('')

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
        setFormMessage('¡Gracias por tu mensaje! Te responderemos pronto.')
        e.currentTarget.reset()
      } else {
        throw new Error(result.error || 'Error al enviar el mensaje')
      }
    } catch (error) {
      console.error('Error:', error)
      setFormStatus('error')
      setFormMessage(
        error instanceof Error 
          ? `Error: ${error.message}. Por favor, intenta de nuevo o contáctanos directamente por email o teléfono.`
          : 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctanos directamente por email o teléfono.'
      )
    }
  }

  return (
    <section id="contacto" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Listo para empezar tu proyecto?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Cuéntanos sobre tu idea y te ayudaremos a hacerla realidad
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">contacto@softory.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Teléfono</h3>
                <p className="text-gray-600 dark:text-gray-300">+34 123 456 789</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Ubicación</h3>
                <p className="text-gray-600 dark:text-gray-300">Madrid, España</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Tu nombre"
                required
                className="w-full"
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Tu email"
                required
                className="w-full"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Tu mensaje"
                required
                className="w-full min-h-[150px]"
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={formStatus === 'loading'}
            >
              {formStatus === 'loading' ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Enviar mensaje
                </>
              )}
            </Button>
            {formMessage && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-sm ${
                  formStatus === 'success' 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-red-600 dark:text-red-400'
                }`}
              >
                {formMessage}
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
} 