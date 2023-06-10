const Espectador = require('../models/espectador');

const espectadorCtrl = {};

// Dar de alta un Espectador (POST)
espectadorCtrl.crearEspectador = async (req, res) => {
  const { apellido, nombre, dni, email } = req.body;

  try {
    const espectador = new Espectador({
      apellido,
      nombre,
      dni,
      email
    });

    await espectador.save();

    res.json({
      status: '1',
      msg: 'Espectador guardado.'
    });
  } catch (error) {
    res.status(400).json({
      status: '0',
      msg: 'Error procesando la operación.'
    });
  }
};

// Obtener todos los Espectadores (GET)
espectadorCtrl.obtenerEspectadores = async (req, res) => {
  try {
    const espectadores = await Espectador.find();
    res.json(espectadores);
  } catch (error) {
    res.status(400).json({
      status: '0',
      msg: 'Error procesando la operación.'
    });
  }
};

// Obtener UN Espectador por email (GET)
espectadorCtrl.obtenerEspectador = async (req, res) => {
  try {
    const email = req.params.email;
    const espectador = await Espectador.findOne({ email });
    
    if (!espectador) {
      res.status(404).json({
        status: '0',
        msg: 'Espectador no encontrado.'
      });
      return;
    }
    
    res.json(espectador);
  } catch (error) {
    res.status(400).json({
      status: '0',
      msg: 'Error procesando la operación.'
    });
  }
};


module.exports = espectadorCtrl;
