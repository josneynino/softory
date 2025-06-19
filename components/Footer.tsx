"use client"

import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Linkedin, 
  Github,
  Twitter,
  Facebook,
  ExternalLink,
  Heart
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const footerLinks = {
  company: [
    { name: "Sobre Nosotros", href: "/sobre-softory" },
    { name: "Nuestro Equipo", href: "/equipo" },
    { name: "Carreras", href: "/contacto" },
    { name: "Metodología", href: "/metodologia" }
  ],
  services: [
    { name: "Desarrollo Web", href: "/servicios" },
    { name: "Desarrollo Móvil", href: "/servicios" },
    { name: "Consultoría", href: "/servicios" },
    { name: "Diseño UX/UI", href: "/servicios" }
  ],
  resources: [
    { name: "Casos de Éxito", href: "/casos-exito" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Precios", href: "/precios" },
    { name: "Soporte", href: "/contacto" }
  ],
  legal: [
    { name: "Política de Privacidad", href: "/privacy" },
    { name: "Términos de Servicio", href: "/terms" },
    { name: "Cookies", href: "/cookies" },
    { name: "Aviso Legal", href: "/legal" }
  ]
}

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
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/softory_tech",
    color: "blue"
  }
]

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contacto@softory.com",
    href: "mailto:contacto@softory.com"
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+52 51 5127 62",
    href: "tel:+5251512762"
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Ciudad de México, México",
    href: "https://maps.google.com/?q=Ciudad+de+México"
  }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Soft<span className="text-blue-400">ory</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Transformamos ideas en software escalable. Creamos soluciones digitales que impulsan el crecimiento de tu negocio.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <IconComponent className="w-4 h-4 text-blue-400" />
                    <a 
                      href={contact.href} 
                      className="text-gray-300 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contact.value}
                    </a>
                  </div>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} Softory. Todos los derechos reservados.
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>en México</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 