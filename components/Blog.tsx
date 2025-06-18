"use client"

import { useState } from "react"
import { 
  Calendar, 
  User, 
  ArrowRight, 
  BookOpen, 
  Code, 
  TrendingUp,
  Smartphone,
  Palette,
  ExternalLink
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const blogPosts = [
  {
    id: 1,
    title: "Cómo elegir la tecnología correcta para tu proyecto web",
    excerpt: "Una guía completa para seleccionar la stack tecnológica ideal según las necesidades de tu negocio y presupuesto.",
    author: "Equipo Softory",
    date: "2024-01-15",
    category: "Tecnología",
    readTime: "5 min",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Next.js", "Tecnología"],
    featured: true
  },
  {
    id: 2,
    title: "Tendencias de UX/UI para 2024",
    excerpt: "Descubre las tendencias más importantes en diseño de interfaces que dominarán el mercado este año.",
    author: "Ana Martínez",
    date: "2024-01-10",
    category: "Diseño",
    readTime: "4 min",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["UX/UI", "Diseño", "Tendencias"]
  },
  {
    id: 3,
    title: "Optimización de rendimiento en aplicaciones React",
    excerpt: "Técnicas avanzadas para mejorar la velocidad y eficiencia de tus aplicaciones React.",
    author: "Carlos Rodríguez",
    date: "2024-01-05",
    category: "Desarrollo",
    readTime: "7 min",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Performance", "Optimización"]
  },
  {
    id: 4,
    title: "Guía completa de SEO para desarrolladores",
    excerpt: "Mejores prácticas de SEO que todo desarrollador web debe conocer para crear sitios optimizados.",
    author: "María González",
    date: "2023-12-28",
    category: "SEO",
    readTime: "6 min",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["SEO", "Web", "Optimización"]
  }
]

const resources = [
  {
    title: "Guía de Inicio Rápido",
    description: "Documentación completa para comenzar con React y Next.js",
    icon: BookOpen,
    category: "Documentación",
    link: "#",
    downloads: "1,200+"
  },
  {
    title: "Kit de Componentes UI",
    description: "Biblioteca de componentes reutilizables para React",
    icon: Code,
    category: "Herramientas",
    link: "#",
    downloads: "800+"
  },
  {
    title: "Plantillas de Diseño",
    description: "Plantillas gratuitas para proyectos web y móviles",
    icon: Palette,
    category: "Diseño",
    link: "#",
    downloads: "2,500+"
  },
  {
    title: "Análisis de Rendimiento",
    description: "Herramientas y métricas para optimizar tu aplicación",
    icon: TrendingUp,
    category: "Performance",
    link: "#",
    downloads: "600+"
  }
]

const categories = [
  { id: "all", label: "Todos", icon: BookOpen },
  { id: "tecnologia", label: "Tecnología", icon: Code },
  { id: "diseno", label: "Diseño", icon: Palette },
  { id: "desarrollo", label: "Desarrollo", icon: Smartphone },
  { id: "seo", label: "SEO", icon: TrendingUp }
]

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredPosts = activeCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase() === activeCategory)

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Blog y Recursos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantente actualizado con las últimas tendencias en desarrollo web y tecnología
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-4">
                    {post.category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div>{post.readTime}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-fit">
                    Leer más
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
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

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredPosts.filter(post => !post.featured).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="aspect-video bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {post.category}
                  </Badge>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div>{post.readTime}</div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Leer más
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Suscríbete a nuestro newsletter</h3>
              <p className="text-blue-100 mb-6">
                Recibe las últimas noticias, tutoriales y recursos directamente en tu email
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-2 rounded-lg text-gray-900"
                />
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  Suscribirse
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 