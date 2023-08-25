const { findTable } = require('../db/actions');

exports.getTables = async (req, res) => {
	try {
		// const { size, page } = req.query;

		const data = await findTable();

		res.status(200).json({ data });
	} catch (error) {
		res.status(404).send(error.message ? error.message : { error });
	}
};
