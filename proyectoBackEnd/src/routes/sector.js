const sectorController = require('./../controllers/sectorController');

const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de sectores
router.get('/', sectorController.getSectores);
router.post('/', sectorController.createSector);

//exportamos el modulo de rutas
module.exports = router;
