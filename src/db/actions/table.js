const { Table, Restaurant } = require('../models');

exports.findTable = async () => {
	try {
		const tables = await Table.findAll({
			attributes: ['seats', 'location'],
			include: [
				{
					model: Restaurant,
					attributes: ['name'],
					through: {
						attributes: [],
					},
				},
			],
		});

		return tables;
	} catch (error) {
		throw new Error(`Error find table: ${error.message}`);
	}
};
