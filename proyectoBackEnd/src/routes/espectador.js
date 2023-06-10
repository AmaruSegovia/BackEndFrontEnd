const express = require('express');
const router = express.Router();
const espectadorCtrl = require('../controllers/espectadorController');

// Dar de alta un Espectador (POST)
router.post('/', espectadorCtrl.crearEspectador);

// Obtener todos los Espectadores (GET)
router.get('/', espectadorCtrl.obtenerEspectadores);

// Obtener UN Espectador (GET)
router.get('/:email', espectadorCtrl.obtenerEspectador);

module.exports = router;
