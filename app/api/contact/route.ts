import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Configurar el transporter de nodemailer
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true para 465, false para otros puertos
  auth: {
    user: 'jozneydeveloper@gmail.com',
    pass: 'nnKQpe2qjWm8ErKTC'
  }
})

export async function POST(request: Request) {
  try {
    console.log('Iniciando procesamiento de la solicitud...')
    const { name, email, message } = await request.json()
    console.log('Datos recibidos:', { name, email, message })

    // Validar los campos requeridos
    if (!name || !email || !message) {
      console.log('Campos faltantes:', { name, email, message })
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      )
    }

    // Verificar la conexión
    try {
      await transporter.verify()
      console.log('Conexión SMTP verificada correctamente')
    } catch (error) {
      console.error('Error al verificar la conexión SMTP:', error)
      throw new Error('Error de conexión con el servidor de correo')
    }

    // Configurar el email
    const mailOptions = {
      from: {
        name: 'Softory Contact Form',
        address: 'jozneydeveloper@gmail.com'
      },
      to: 'jozneydeveloper@gmail.com',
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: `
        Nombre: ${name}
        Email: ${email}
        Mensaje: ${message}
      `,
      html: `
        <h3>Nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `
    }

    console.log('Enviando email principal...')
    // Enviar el email
    await transporter.sendMail(mailOptions)
    console.log('Email principal enviado exitosamente')

    // Enviar confirmación al remitente
    const confirmationMailOptions = {
      from: {
        name: 'Softory',
        address: 'jozneydeveloper@gmail.com'
      },
      to: email,
      subject: 'Gracias por contactar a Softory',
      html: `
        <h2>¡Gracias por contactarnos!</h2>
        <p>Hola ${name},</p>
        <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.</p>
        <p>Saludos,<br>El equipo de Softory</p>
      `
    }

    console.log('Enviando email de confirmación...')
    await transporter.sendMail(confirmationMailOptions)
    console.log('Email de confirmación enviado exitosamente')

    return NextResponse.json(
      { message: 'Mensaje enviado exitosamente' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error detallado al enviar el email:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Error al enviar el mensaje' },
      { status: 500 }
    )
  }
} 