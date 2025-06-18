import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Política de Privacidad</h1>
          <p className="text-gray-600">Última actualización: Enero 2024</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Información que Recopilamos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Recopilamos información que nos proporcionas directamente, como cuando:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Completas formularios de contacto</li>
                <li>Te suscribes a nuestro newsletter</li>
                <li>Nos contactas por email o teléfono</li>
                <li>Utilizas nuestros servicios</li>
              </ul>
              <p className="text-gray-700">
                Esta información puede incluir tu nombre, email, número de teléfono, empresa y cualquier otra información que nos proporciones.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Información Recopilada Automáticamente</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Cuando visitas nuestro sitio web, recopilamos automáticamente cierta información, incluyendo:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Dirección IP y ubicación geográfica</li>
                <li>Tipo de navegador y dispositivo</li>
                <li>Páginas visitadas y tiempo de permanencia</li>
                <li>Enlaces en los que haces clic</li>
                <li>Información de cookies y tecnologías similares</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Cómo Utilizamos tu Información</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Proporcionar y mejorar nuestros servicios</li>
                <li>Responder a tus consultas y solicitudes</li>
                <li>Enviar comunicaciones relacionadas con nuestros servicios</li>
                <li>Personalizar tu experiencia en nuestro sitio web</li>
                <li>Analizar el uso del sitio web y mejorar su funcionalidad</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Compartir Información</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio</li>
                <li>Cuando es requerido por ley o para proteger nuestros derechos</li>
                <li>Con tu consentimiento explícito</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Cookies y Tecnologías Similares</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Utilizamos cookies y tecnologías similares para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Recordar tus preferencias</li>
                <li>Analizar el tráfico del sitio web</li>
                <li>Mejorar la funcionalidad del sitio</li>
                <li>Proporcionar contenido personalizado</li>
              </ul>
              <p className="text-gray-700">
                Puedes controlar el uso de cookies a través de la configuración de tu navegador.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Seguridad de la Información</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Tus Derechos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Tienes derecho a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Acceder a tu información personal</li>
                <li>Corregir información inexacta</li>
                <li>Solicitar la eliminación de tu información</li>
                <li>Oponerte al procesamiento de tu información</li>
                <li>Retirar tu consentimiento en cualquier momento</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Cambios a esta Política</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre cualquier cambio significativo publicando la nueva política en nuestro sitio web.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Si tienes preguntas sobre esta política de privacidad, contáctanos en:
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