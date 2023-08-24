const { Diner } = require('../models');
const { findWithPaginate } = require('./helper/queryBuilder');

exports.getAllDiners = async (size, page) => {
	try {
		const diners = await findWithPaginate(
			Diner,
			{
				page,
				size,
			},
			'genres',
		);

		return diners;
	} catch (error) {
		throw new Error('error');
	}
};

exports.createDiner = async (diner) => {
	try {
		const dinerInstance = await Diner.create(diner);
		return dinerInstance.get({ plain: true });
	} catch (error) {
		throw new Error(`Error creating diner: ${error.message}`);
	}
};
