const express = require('express');
const router = express.Router();
const ticketCtrl = require('../controllers/ticketController');

// Dar de alta un ticket (POST)
router.post('/', ticketCtrl.crearTicket);

// Recuperar TODOS los tickets (GET) incluyendo la información de los espectadores
router.get("/",ticketCtrl.obtenerTickets);

// Eliminar un ticket (DELETE)
router.delete('/:id', ticketCtrl.eliminarTicket);

// Modificar un ticket (PUT)
router.put('/:id', ticketCtrl.modificarTicket);

module.exports = router;
