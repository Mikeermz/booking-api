const { Op } = require('sequelize');

const { Table, Restaurant, Cuisine } = require('../models');

exports.findRestaurant = async (cuisines, seats) => {
	console.log(cuisines);
	try {
		const restaurants = await Restaurant.findAll({
			attributes: ['name'],
			include: [
				{
					model: Cuisine,
					attributes: ['type'],
					through: {
						attributes: [],
					},
					where: {
						type: {
							[Op.in]: cuisines,
						},
					},
				},
				{
					model: Table,
					attributes: ['seats', 'location'],
					through: {
						attributes: [],
					},
					where: {
						seats: {
							[Op.gte]: seats,
						},
					},
				},
			],
		});

		if (restaurants.length === 0) return { message: 'no restaurant found' };

		return restaurants;
	} catch (error) {
		throw new Error(`Error find restaurant: ${error.message}`);
	}
};
