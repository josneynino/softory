"use client"

import { 
  Users, 
  Award, 
  Target, 
  Heart, 
  Zap, 
  Globe,
  Linkedin,
  Github,
  Mail,
  Star
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const teamMembers = [
  {
    name: "Jozney Developer",
    role: "CEO & Full Stack Developer",
    image: "/placeholder-user.jpg",
    bio: "Apasionado por crear soluciones digitales innovadoras. Especialista en React, Next.js y tecnologías modernas.",
    skills: ["React", "Next.js", "TypeScript", "Node.js"],
    experience: "5+ años",
    projects: "50+",
    social: {
      linkedin: "https://www.linkedin.com/in/jozneydeveloper",
      github: "https://github.com/jozneydeveloper",
      email: "jozneydeveloper@gmail.com"
    }
  },
  {
    name: "Ana Martínez",
    role: "UX/UI Designer",
    image: "/placeholder-user.jpg",
    bio: "Diseñadora creativa enfocada en crear experiencias de usuario excepcionales y interfaces intuitivas.",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    experience: "4+ años",
    projects: "30+",
    social: {
      linkedin: "#",
      behance: "#",
      email: "ana@softory.com"
    }
  },
  {
    name: "Carlos Rodríguez",
    role: "Backend Developer",
    image: "/placeholder-user.jpg",
    bio: "Desarrollador backend especializado en arquitecturas escalables y APIs robustas.",
    skills: ["Node.js", "Python", "PostgreSQL", "AWS"],
    experience: "6+ años",
    projects: "40+",
    social: {
      linkedin: "#",
      github: "#",
      email: "carlos@softory.com"
    }
  }
]

const certifications = [
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google",
    year: "2023",
    icon: "☁️"
  },
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
    icon: "⚡"
  },
  {
    name: "Microsoft Certified: Azure Developer",
    issuer: "Microsoft",
    year: "2022",
    icon: "🔷"
  },
  {
    name: "Certified Scrum Master (CSM)",
    issuer: "Scrum Alliance",
    year: "2022",
    icon: "📋"
  }
]

const achievements = [
  {
    title: "Top 10 Agencias de Desarrollo",
    description: "Reconocidos como una de las mejores agencias de desarrollo web en México",
    year: "2023",
    icon: Award
  },
  {
    title: "Mejor Proyecto E-commerce",
    description: "Premio por el desarrollo de la plataforma Finzo en la categoría de comercio electrónico",
    year: "2023",
    icon: Star
  },
  {
    title: "Innovación Tecnológica",
    description: "Reconocimiento por la implementación de tecnologías emergentes en proyectos empresariales",
    year: "2022",
    icon: Zap
  }
]

const values = [
  {
    title: "Innovación",
    description: "Siempre exploramos las últimas tecnologías para ofrecer soluciones de vanguardia",
    icon: Zap
  },
  {
    title: "Calidad",
    description: "Nos comprometemos a entregar productos de la más alta calidad y rendimiento",
    icon: Star
  },
  {
    title: "Colaboración",
    description: "Trabajamos en estrecha colaboración con nuestros clientes para entender sus necesidades",
    icon: Users
  },
  {
    title: "Impacto",
    description: "Buscamos crear soluciones que generen un impacto positivo en el negocio de nuestros clientes",
    icon: Target
  }
]

export default function Team() {
  return (
    <section id="equipo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestro Equipo</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce a los profesionales apasionados que hacen posible la transformación digital de tu negocio
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-6 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {member.skills.map((skill, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <div className="font-semibold text-gray-900">{member.experience}</div>
                      <div className="text-gray-600">Experiencia</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{member.projects}</div>
                      <div className="text-gray-600">Proyectos</div>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-3">
                    {member.social.linkedin && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {member.social.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    <Button variant="outline" size="sm" asChild>
                      <a href={`mailto:${member.social.email}`}>
                        <Mail className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nuestros Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Certificaciones y Reconocimientos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-4">{cert.icon}</div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h4>
                    <p className="text-gray-600 text-sm mb-2">{cert.issuer}</p>
                    <Badge variant="outline">{cert.year}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Logros y Premios</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-yellow-100 text-yellow-600 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                          <p className="text-gray-600 text-sm mb-3">{achievement.description}</p>
                          <Badge variant="secondary">{achievement.year}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Trabaja con Nosotros
            <Users className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
} 