import { NextResponse } from 'next/server'

export async function GET() {
  // Puedes agregar más rutas dinámicas si tienes más páginas
  const pages = [
    '',
    'servicios',
    'proceso',
    'proyectos',
    'equipo',
    'blog',
    'contacto',
    'privacy',
    'terms',
    'cookies',
    'legal',
  ]
  const baseUrl = 'https://softory.com/'
  const urls = pages.map(
    (page) =>
      `<url><loc>${baseUrl}${page}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`
  )
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  })
} 