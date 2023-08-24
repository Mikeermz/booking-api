const { createDiner, getAllDiners } = require('../db/actions');

exports.newDiner = async (req, res) => {
	try {
		const { fullName } = req.body;

		const diner = await createDiner({ fullName });

		res.status(200).json({ data: diner });
	} catch (error) {
		res.status(404).json(error.message ? { error: error.message } : { error });
	}
};

exports.getDiners = async (req, res) => {
	try {
		const { size, page } = req.query;

		const data = await getAllDiners(size, page);

		res.status(200).json({ data });
	} catch (error) {
		res.status(404).send(error.message ? error.message : { error });
	}
};
