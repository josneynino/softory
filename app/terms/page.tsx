import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsOfService() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Términos de Servicio</h1>
          <p className="text-gray-600">Última actualización: Enero 2024</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Aceptación de los Términos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Al acceder y utilizar los servicios de Softory, aceptas estar sujeto a estos términos de servicio. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Descripción de los Servicios</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Softory proporciona servicios de desarrollo de software, incluyendo pero no limitado a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Desarrollo de aplicaciones web</li>
                <li>Desarrollo de aplicaciones móviles</li>
                <li>Consultoría en tecnología</li>
                <li>Diseño de interfaces de usuario</li>
                <li>Mantenimiento y soporte técnico</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Obligaciones del Cliente</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Como cliente, te comprometes a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Proporcionar información precisa y completa</li>
                <li>Cooperar en el desarrollo del proyecto</li>
                <li>Revisar y aprobar entregables en tiempo razonable</li>
                <li>Pagar los servicios según los términos acordados</li>
                <li>No utilizar nuestros servicios para actividades ilegales</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Propiedad Intelectual</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                <strong>Derechos de Softory:</strong> Retenemos los derechos sobre nuestro código base, frameworks, librerías y metodologías de desarrollo.
              </p>
              <p className="text-gray-700">
                <strong>Derechos del Cliente:</strong> El cliente obtiene los derechos sobre el código específico desarrollado para su proyecto, según los términos del contrato.
              </p>
              <p className="text-gray-700">
                <strong>Licencias:</strong> Utilizamos software de terceros bajo licencias apropiadas, que se transfieren al cliente según corresponda.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Confidencialidad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Ambas partes se comprometen a mantener la confidencialidad de la información sensible compartida durante el desarrollo del proyecto, incluyendo:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Información comercial y estratégica</li>
                <li>Código fuente y arquitectura técnica</li>
                <li>Datos de usuarios y clientes</li>
                <li>Información financiera</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Garantías y Limitaciones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                <strong>Garantías:</strong> Garantizamos que nuestros servicios se realizarán con la habilidad y cuidado razonables de profesionales calificados.
              </p>
              <p className="text-gray-700">
                <strong>Limitaciones:</strong> No garantizamos que el software esté libre de errores o que funcione sin interrupciones. El cliente es responsable de probar y validar el software antes de su implementación en producción.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Responsabilidad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                En ningún caso Softory será responsable por daños indirectos, incidentales, especiales o consecuentes, incluyendo pérdida de beneficios, datos o uso.
              </p>
              <p className="text-gray-700">
                Nuestra responsabilidad total estará limitada al monto pagado por los servicios en los 12 meses anteriores al evento que dio lugar a la reclamación.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Terminación</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Cualquiera de las partes puede terminar el acuerdo con 30 días de notificación por escrito.
              </p>
              <p className="text-gray-700">
                En caso de terminación:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>El cliente pagará por los servicios realizados hasta la fecha de terminación</li>
                <li>Entregaremos todos los entregables completados</li>
                <li>Proporcionaremos asistencia para la transición según sea necesario</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Ley Aplicable</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Estos términos se rigen por las leyes de México. Cualquier disputa será resuelta en los tribunales de la Ciudad de México.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Modificaciones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Si tienes preguntas sobre estos términos de servicio, contáctanos en:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> legal@softory.com<br />
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