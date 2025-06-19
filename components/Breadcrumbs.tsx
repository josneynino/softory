"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

export default function Breadcrumbs() {
  const pathname = usePathname()

  const generateBreadcrumbs = () => {
    const paths = pathname.split("/").filter(Boolean)
    const breadcrumbs = [{ name: "Inicio", href: "/" }]

    let currentPath = ""
    paths.forEach((path) => {
      currentPath += `/${path}`
      const name = path
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
      breadcrumbs.push({ name, href: currentPath })
    })

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  // No mostrar breadcrumbs en la página principal
  if (pathname === "/") return null

  return (
    <nav className="bg-gray-50 border-b border-gray-200" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 py-3">
          {breadcrumbs.map((breadcrumb, index) => (
            <div key={breadcrumb.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-sm font-medium text-gray-900">
                  {breadcrumb.name}
                </span>
              ) : (
                <Link
                  href={breadcrumb.href}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center"
                >
                  {index === 0 ? (
                    <Home className="h-4 w-4" />
                  ) : (
                    breadcrumb.name
                  )}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
} 