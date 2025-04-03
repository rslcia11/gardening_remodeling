const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Ruta para recibir datos del formulario y guardarlos en la base de datos
router.post('/', async (req, res) => {
    try {
        console.log("Received data:", req.body); // 📌 Esto mostrará los datos en la consola

        const { full_name, email, phone_number, service_interest, message } = req.body;
        
        // Mapear el service_interest al valor ENUM correcto
        let mappedServiceInterest = 'Other Service'; // Valor por defecto

        // Mapear los valores del formulario a los valores ENUM permitidos
        if (service_interest) {
            switch(service_interest.toLowerCase()) {
                case 'landscaping':
                case 'jardinería':
                case 'garden-maintenance':
                    mappedServiceInterest = 'Gardening';
                    break;
                case 'construction':
                case 'construcción':
                    mappedServiceInterest = 'Construction';
                    break;
                case 'interior-remodeling':
                case 'remodeling':
                case 'remodelación':
                    mappedServiceInterest = 'Remodeling';
                    break;
                default:
                    mappedServiceInterest = 'Other Service';
            }
        }
        
        console.log("Mapped service interest:", mappedServiceInterest); // 📌 Verificar el mapeo

        // Intenta insertar en la base de datos con el valor mapeado
        const newUser = await User.create({ 
            full_name, 
            email, 
            phone_number, 
            service_interest: mappedServiceInterest, 
            message 
        });

        console.log("Inserted user:", newUser.toJSON()); // 📌 Verifica que se inserta correctamente

        res.status(201).json({ message: 'Form submitted successfully!' });
    } catch (error) {
        console.error("Database error:", error);
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
