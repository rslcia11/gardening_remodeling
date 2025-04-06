const nodemailer = require("nodemailer")

// Crear un transporter reutilizable usando SMTP
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || "gmail", // Por ejemplo: 'gmail', 'outlook', etc.
  auth: {
    user: process.env.EMAIL_USER, // Tu dirección de correo electrónico
    pass: process.env.EMAIL_PASSWORD, // Tu contraseña o contraseña de aplicación
  },
})

/**
 * Envía un correo electrónico con los datos del formulario
 * @param {Object} formData - Datos del formulario
 * @returns {Promise} - Promesa que se resuelve cuando el correo se envía
 */
const sendFormEmail = async (formData) => {
  const { full_name, email, phone_number, service_interest, message } = formData

  // Formatear el servicio para mejor legibilidad
  let serviceFormatted = service_interest
  switch (service_interest) {
    case "Gardening":
      serviceFormatted = "Jardinería"
      break
    case "Construction":
      serviceFormatted = "Construcción"
      break
    case "Remodeling":
      serviceFormatted = "Remodelación"
      break
    case "Other Service":
      serviceFormatted = "Otro Servicio"
      break
  }

  // Configurar el contenido del correo
  const mailOptions = {
    from: `"Formulario Web Jimenez Services" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER, // Correo de destino (puede ser el mismo u otro)
    subject: `Nueva solicitud de contacto: ${serviceFormatted} - ${full_name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #d4af37; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">Nueva Solicitud de Contacto</h2>
        
        <div style="margin: 20px 0;">
          <p><strong>Nombre:</strong> ${full_name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${phone_number || "No proporcionado"}</p>
          <p><strong>Servicio de interés:</strong> ${serviceFormatted}</p>
          <p><strong>Mensaje:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 5px;">
            ${message || "No se proporcionó mensaje"}
          </div>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #666;">
          <p>Este correo fue enviado automáticamente desde el formulario de contacto del sitio web de Jimenez Services LLC.</p>
        </div>
      </div>
    `,
  }

  // Enviar el correo
  return transporter.sendMail(mailOptions)
}

module.exports = {
  sendFormEmail,
}

