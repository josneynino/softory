"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const GradientText = ({ children }: { children: React.ReactNode }) => (
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-fuchsia-500">
    {children}
  </span>
);

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="relative bg-gray-50 overflow-hidden pt-32 pb-20">
      {/* Decorative background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="absolute -left-48 -top-48 w-[800px] h-[800px] text-blue-300" fill="currentColor" viewBox="0 0 1024 1024">
          <circle cx="512" cy="512" r="512" />
        </svg>
        <svg className="absolute -right-64 -bottom-32 w-[800px] h-[800px] text-fuchsia-300" fill="currentColor" viewBox="0 0 1024 1024">
          <circle cx="512" cy="512" r="512" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transformamos Ideas en <GradientText>Software Escalable</GradientText>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
              En Softory creamos soluciones digitales a medida: aplicaciones web, móviles y consultoría tecnológica para impulsar tu negocio al siguiente nivel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("contacto")}
                className="bg-gradient-to-r from-blue-600 to-fuchsia-600 hover:from-blue-700 hover:to-fuchsia-700 text-white shadow-lg transform hover:scale-105 transition-transform"
              >
                Solicita una Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("proyectos")}
                className="border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Ver Proyectos
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
              <div className="flex -space-x-2">
                <Image src="/placeholder-user.jpg" alt="User 1" width={40} height={40} className="rounded-full border-2 border-white" />
                <Image src="/placeholder-user.jpg" alt="User 2" width={40} height={40} className="rounded-full border-2 border-white" />
                <Image src="/placeholder-user.jpg" alt="User 3" width={40} height={40} className="rounded-full border-2 border-white" />
              </div>
              <div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>
                <p className="text-sm text-gray-600">+30 clientes satisfechos</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <Image
              src="/assets/images/hero-illustration.svg"
              alt="Desarrollo de Software en Softory"
              width={600}
              height={500}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 