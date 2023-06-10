const Transaccion = require('../models/transaccion');

const transaccionCtrl = {};

// Dar de alta una Transaccion (POST)
transaccionCtrl.crearTransaccion = async (req, res) => {
  try {
    const {
      monedaOrigen,
      cantidadOrigen,
      monedaDestino,
      cantidadDestino,
      emailCliente,
      tasaConversion
    } = req.body;

    const transaccion = new Transaccion({
      monedaOrigen,
      cantidadOrigen,
      monedaDestino,
      cantidadDestino,
      emailCliente,
      tasaConversion
    });

    await transaccion.save();

    res.json({
      status: '1',
      msg: 'Transaccion creada.',
      transaccion
    });
  } catch (error) {
    res.status(400).json({
      status: '0',
      msg: 'Error procesando la operacion.',
      error: error.message
    });
  }
};

// Recuperar TODAS las Transacciones Registradas (GET)
transaccionCtrl.obtenerTransacciones = async (req, res) => {
  try {
    const transacciones = await Transaccion.find();
    res.json(transacciones);
  } catch (error) {
    res.status(400).json({
      status: '0',
      msg: 'Error procesando la operacion.',
      error: error.message
    });
  }
};

// Recuperar el histórico de transacciones de un determinado cliente (GET), utilizar email como clave
transaccionCtrl.obtenerHistoricoTransacciones = async (req, res) => {
  try {
    const emailCliente = req.params.email;
    const transacciones = await Transaccion.find({ emailCliente });
    res.json(transacciones);
  } catch (error) {
    res.status(400).json({
      status: '0',
      msg: 'Error procesando la operacion.',
      error: error.message
    });
  }
};

// Recuperar TODAS las Transacciones que tengan como origen y destino las divisas (monedas) recibidas como parámetro (GET). Utilice el concepto de PARAMS.
transaccionCtrl.obtenerTransaccionesPorMonedas = async (req, res) => {
  try {
    const { monedaOrigen, monedaDestino } = req.params;
    const transacciones = await Transaccion.find({
      monedaOrigen,
      monedaDestino
    });
    res.json(transacciones);
  } catch (error) {
    res.status(400).json({
      status: '0',
      msg: 'Error procesando la operacion.',
      error: error.message
    });
  }
};

module.exports = transaccionCtrl;
