const Ticket = require('../models/ticket');

const ticketCtrl = {};

// Dar de alta un ticket (POST)
ticketCtrl.crearTicket = async (req, res) => {
  const { precioTicket, categoriaEspectador, fechaCompra, espectadorId } = req.body;

  try {
    const ticket = new Ticket({
      precioTicket,
      categoriaEspectador,
      fechaCompra,
      espectador: espectadorId,
    });

    await ticket.save();

    res.json({
      status: '1',
      msg: 'Ticket guardado.',
    });
  } catch (error) {
    res.status(400).json({
      status: '0',
      msg: 'Error procesando la operación.',
    });
  }
};

// Recuperar TODOS los tickets (GET) incluyendo la información de los espectadores
ticketCtrl.obtenerTickets = async (req,res) => {

  let criteria = {};
  if(req.query.categoria != null && req.query.categoria != ""){
    criteria.categoriaEspectador = req.query.categoria;
  }
  var tickets = await Ticket.find(criteria).populate("espectador");
  res.json(tickets);
};


// Eliminar un ticket (DELETE)
ticketCtrl.eliminarTicket = async (req, res) => {
  try {
    await Ticket.findByIdAndDelete(req.params.id);
    res.json({
      status: '1',
      msg: 'Ticket eliminado',
    });
  } catch (error) {
    res.status(400).json({
      status: '0',
      msg: 'Error procesando la operación',
    });
  }
};

// Modificar un ticket (PUT)
ticketCtrl.modificarTicket = async (req, res) => {
  try {
    await Ticket.findByIdAndUpdate(req.params.id, req.body);
    res.json({
      status: '1',
      msg: 'Ticket actualizado',
    });
  } catch (error) {
    res.status(400).json({
      status: '0',
      msg: 'Error procesando la operación',
    });
  }
};

module.exports = ticketCtrl;
