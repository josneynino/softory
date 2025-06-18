import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Política de Cookies</h1>
          <p className="text-gray-600">Última actualización: Enero 2024</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>¿Qué son las Cookies?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web. Estas cookies nos ayudan a mejorar tu experiencia de navegación y a entender cómo utilizas nuestro sitio.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tipos de Cookies que Utilizamos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Cookies Esenciales</h4>
                <p className="text-gray-700 mb-2">
                  Estas cookies son necesarias para el funcionamiento básico del sitio web y no se pueden desactivar.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Cookies de sesión para mantener tu sesión activa</li>
                  <li>Cookies de seguridad para proteger contra ataques</li>
                  <li>Cookies de preferencias básicas</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Cookies de Rendimiento</h4>
                <p className="text-gray-700 mb-2">
                  Nos ayudan a entender cómo interactúas con nuestro sitio web.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Análisis de tráfico del sitio web</li>
                  <li>Métricas de rendimiento</li>
                  <li>Identificación de errores</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Cookies de Funcionalidad</h4>
                <p className="text-gray-700 mb-2">
                  Mejoran la funcionalidad y personalización del sitio web.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Recordar tus preferencias de idioma</li>
                  <li>Personalizar el contenido mostrado</li>
                  <li>Mejorar la experiencia de usuario</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Cookies de Marketing</h4>
                <p className="text-gray-700 mb-2">
                  Se utilizan para mostrar anuncios relevantes y medir la efectividad de nuestras campañas.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Anuncios personalizados</li>
                  <li>Análisis de campañas publicitarias</li>
                  <li>Redes sociales y contenido embebido</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cookies de Terceros</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                También utilizamos servicios de terceros que pueden establecer cookies en tu dispositivo:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Google Analytics:</strong> Para analizar el tráfico del sitio web</li>
                <li><strong>Google Ads:</strong> Para mostrar anuncios relevantes</li>
                <li><strong>Facebook Pixel:</strong> Para seguimiento de conversiones</li>
                <li><strong>LinkedIn Insight:</strong> Para análisis de audiencia</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Control de Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Puedes controlar y gestionar las cookies de varias maneras:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Configuración del navegador:</strong> La mayoría de navegadores te permiten bloquear o eliminar cookies</li>
                <li><strong>Configuración de nuestro sitio:</strong> Puedes ajustar tus preferencias de cookies en cualquier momento</li>
                <li><strong>Herramientas de terceros:</strong> Existen extensiones y herramientas que te ayudan a gestionar cookies</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800">
                  <strong>Nota:</strong> Deshabilitar ciertas cookies puede afectar la funcionalidad de nuestro sitio web.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Duración de las Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900">Cookies de Sesión</h4>
                  <p className="text-gray-700">Se eliminan automáticamente cuando cierras el navegador</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Cookies Persistentes</h4>
                  <p className="text-gray-700">Permanecen en tu dispositivo hasta que expiran o las eliminas manualmente</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Cookies de Análisis</h4>
                  <p className="text-gray-700">Generalmente duran entre 30 días y 2 años</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Actualizaciones de esta Política</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Podemos actualizar esta política de cookies ocasionalmente para reflejar cambios en nuestras prácticas o por otras razones operativas, legales o regulatorias.
              </p>
              <p className="text-gray-700">
                Te notificaremos sobre cualquier cambio significativo publicando la política actualizada en nuestro sitio web.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Si tienes preguntas sobre nuestra política de cookies, contáctanos en:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> privacy@softory.com<br />
                  <strong>Teléfono:</strong> +52 51 5127 62<br />
                  <strong>Dirección:</strong> Ciudad de México, México
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 