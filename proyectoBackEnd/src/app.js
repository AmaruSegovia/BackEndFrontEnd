const express = require('express');
const cors = require('cors');
const { mongoose } = require('./database');
const app = express();

const agentRouter = require('./routes/agent.js');
const sectorRouter = require('./routes/sector.js');
const productoRouter = require('./routes/producto.js');
const transaccionRouter = require('./routes/transaccion.js')

require('dotenv').config();

// Middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

// Cargamos el módulo de direccionamiento de rutas
app.use('/api/agent', require('./routes/agent'));
app.use('/api/sector', require('./routes/sector'));
app.use('/api/producto', require('./routes/producto'));
app.use('/api/transaccion', require('./routes/transaccion'));
app.use('/api/espectador', require('./routes/espectador'));
app.use('/api/ticket', require('./routes/ticket'));

// Configuración de las rutas
//app.use('/api/agent', agentRouter);
//app.use('/api/sector', sectorRouter);
//app.use('/api/producto', productoRouter);

app.set('port', process.env.PORT || 3000);

// Iniciando el servidor
app.listen(app.get('port'), () => {
  console.log(`El puerto es: ${app.get('port')}`);
});

