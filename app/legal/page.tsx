import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function LegalNotice() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Aviso Legal</h1>
          <p className="text-gray-600">Última actualización: Enero 2024</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Información General</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                En cumplimiento con el deber de información dispuesto en la Ley Federal de Protección al Consumidor (LFPC), se facilitan a continuación los siguientes datos de información general de este sitio web:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Denominación social:</strong> Softory<br />
                  <strong>Domicilio:</strong> Ciudad de México, México<br />
                  <strong>Email:</strong> legal@softory.com<br />
                  <strong>Teléfono:</strong> +52 51 5127 62<br />
                  <strong>Actividad:</strong> Desarrollo de software y servicios tecnológicos
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Términos y Condiciones de Uso</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                El acceso y uso de este sitio web implica la aceptación expresa y sin reservas de todos los términos y condiciones incluidos en este Aviso Legal.
              </p>
              <p className="text-gray-700">
                Los términos y condiciones de uso de este sitio web se rigen por la legislación mexicana. Para cualquier litigio que pudiera surgir relacionado con el sitio web o la actividad que en él se desarrolla serán competentes los Juzgados y Tribunales de la Ciudad de México.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Propiedad Intelectual</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Los derechos de propiedad intelectual del contenido de las páginas web, su diseño gráfico y códigos son titularidad de Softory y quedan reservados todos los derechos sobre los mismos.
              </p>
              <p className="text-gray-700">
                La reproducción total o parcial, distribución, comercialización y comunicación pública, puesta a disposición o cualquier otra actividad que se pueda realizar con la información contenida en estas páginas web que no esté expresamente prevista, están prohibidas salvo autorización previa y por escrito de Softory.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Responsabilidad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                <strong>Softory no se hace responsable de:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Los daños y perjuicios de cualquier naturaleza que pudieran ocasionarse por la falta de disponibilidad, continuidad, acceso fallido o mantenimiento del sitio web</li>
                <li>Los errores de contenido o deficiencias de seguridad que pudieran producirse</li>
                <li>Los daños que pudieran ocasionarse al sistema informático del usuario o a los archivos almacenados en el mismo</li>
                <li>La falta de veracidad, exactitud, exhaustividad y/o actualidad de los contenidos</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Enlaces Externos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Este sitio web puede contener enlaces a sitios web de terceros. Softory no se hace responsable del contenido, políticas de privacidad o prácticas de sitios web de terceros.
              </p>
              <p className="text-gray-700">
                La inclusión de enlaces a sitios web externos no implica aprobación o respaldo de Softory hacia el contenido de dichos sitios.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modificaciones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Softory se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su sitio web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se prestan como la forma en la que éstos aparezcan presentados o localizados en su sitio web.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Legislación Aplicable</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Las presentes condiciones se rigen por la legislación mexicana. Para cualquier litigio que pudiera surgir relacionado con el sitio web o la actividad que en él se desarrolla serán competentes los Juzgados y Tribunales de la Ciudad de México.
              </p>
              <p className="text-gray-700">
                En el caso de que cualquier estipulación de las presentes condiciones de uso fuera declarada nula o inaplicable, en su totalidad o en parte, por cualquier Juzgado, Tribunal u órgano administrativo competente, dicha nulidad o inaplicación no afectará a las demás estipulaciones de las condiciones de uso.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Protección de Datos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                En cumplimiento de lo dispuesto en la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados (LGPDPPSO), se informa que:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Los datos personales recabados serán tratados con la finalidad de gestionar la relación comercial y enviar comunicaciones comerciales</li>
                <li>Los datos no serán cedidos a terceros salvo obligación legal</li>
                <li>Puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición dirigiéndote a privacy@softory.com</li>
                <li>Para más información, consulta nuestra Política de Privacidad</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Para cualquier consulta relacionada con este aviso legal, puedes contactarnos en:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> legal@softory.com<br />
                  <strong>Teléfono:</strong> +52 51 5127 62<br />
                  <strong>Dirección:</strong> Ciudad de México, México<br />
                  <strong>Horario de atención:</strong> Lunes a Viernes de 9:00 a 18:00
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 