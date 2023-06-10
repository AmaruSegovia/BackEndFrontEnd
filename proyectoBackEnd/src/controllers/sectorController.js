const Sector = require('../models/sector');

exports.getSectores = async (req, res) => {
	const sectores = await Sector.find();
	res.json(sectores);
};

exports.createSector = async (req, res) => {
	const { nombre, funcion, email, responsable } = req.body;

	const sector = new Sector({
		nombre,
		funcion,
		email,
		responsable,
	});
	try {
		await sector.save();
		res.json({
			status: '1',
			msg: 'sector guardado.',
		});
	} catch (error) {
		res.status(400).json({
			status: '0',
			msg: 'Error procesando operacion.',
		});
	}
};
