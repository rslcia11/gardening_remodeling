const express = require("express")
const router = express.Router()
const User = require("../models/User")
const { sendFormEmail } = require("../utils/emailService") // Importamos el servicio de correo

// Ruta para recibir datos del formulario y guardarlos en la base de datos
router.post("/", async (req, res) => {
  try {
    console.log("Received data:", req.body) // 📌 Esto mostrará los datos en la consola

    const { full_name, email, phone_number, service_interest, message } = req.body

    // Mapear el service_interest al valor ENUM correcto
    let mappedServiceInterest = "Other Service" // Valor por defecto

    // Mapear los valores del formulario a los valores ENUM permitidos
    if (service_interest) {
      switch (service_interest.toLowerCase()) {
        case "landscaping":
        case "jardinería":
        case "garden-maintenance":
          mappedServiceInterest = "Gardening"
          break
        case "construction":
        case "construcción":
          mappedServiceInterest = "Construction"
          break
        case "interior-remodeling":
        case "remodeling":
        case "remodelación":
          mappedServiceInterest = "Remodeling"
          break
          case "snow removal":
            case "remoción de nieve":
            case "snow-removal":
              mappedServiceInterest = "Snow Removal"
              break
        default:
          mappedServiceInterest = "Other Service"
      }
    }

    console.log("Mapped service interest:", mappedServiceInterest) // 📌 Verificar el mapeo

    // Intenta insertar en la base de datos con el valor mapeado
    const newUser = await User.create({
      full_name,
      email,
      phone_number,
      service_interest: mappedServiceInterest,
      message,
    })

    console.log("Inserted user:", newUser.toJSON()) // 📌 Verifica que se inserta correctamente

    // Enviar correo electrónico con los datos del formulario
    try {
      await sendFormEmail({
        full_name,
        email,
        phone_number,
        service_interest: mappedServiceInterest,
        message,
      })
      console.log("Email sent successfully")
    } catch (emailError) {
      console.error("Error sending email:", emailError)
      // No devolvemos error al cliente si falla el correo pero sí se guardó en la BD
    }

    res.status(201).json({ message: "Form submitted successfully!" })
  } catch (error) {
    console.error("Database error:", error)
    res.status(400).json({ error: error.message })
  }
})

module.exports = router

