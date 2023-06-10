const agenteCtrl = require('./../controllers/agentController');

const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/', agenteCtrl.getAgentes);
router.post('/', agenteCtrl.createAgente);
router.get('/:id', agenteCtrl.getAgente);
router.put('/:id', agenteCtrl.editAgente);
router.delete('/:id', agenteCtrl.deleteAgente);
//exportamos el modulo de rutas
module.exports = router;
