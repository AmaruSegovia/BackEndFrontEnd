const mongoose = require('mongoose');
const { Schema } = mongoose;

const EspectadorSchema = new Schema({
  apellido: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  dni: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('Espectador', EspectadorSchema);
