const express = require('express');
const router = express.Router();
const transaccionController = require('../controllers/transaccionController');

// Dar de alta una Transaccion (POST)
router.post('/', transaccionController.crearTransaccion);

// Recuperar TODAS las Transacciones Registradas (GET)
router.get('/', transaccionController.obtenerTransacciones);

// Recuperar el histórico de transacciones de un determinado cliente (GET), utilizar email como clave
router.get('/historico/:email', transaccionController.obtenerHistoricoTransacciones);

// Recuperar TODAS las Transacciones que tengan como origen y destino las divisas (monedas) recibidas como parámetro (GET)
router.get('/monedas/:monedaOrigen/:monedaDestino', transaccionController.obtenerTransaccionesPorMonedas);

module.exports = router;
