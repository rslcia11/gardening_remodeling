const db = require('../database/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
    const { name, lastname, email, phone, password, role } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    
    db.query(
        'INSERT INTO users (name, lastname, email, phone, password, role) VALUES (?, ?, ?, ?, ?, ?)',
        [name, lastname, email, phone, hashedPassword, role || 'user'],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Usuario registrado', userId: result.insertId });
        }
    );
};

exports.login = (req, res) => {
    const { email, password } = req.body;
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(401).json({ error: 'Usuario no encontrado' });

        const user = results[0];
        if (!bcrypt.compareSync(password, user.password)) return res.status(401).json({ error: 'Contraseña incorrecta' });

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '2h' });
        res.json({ message: 'Login exitoso', token });
    });
};
