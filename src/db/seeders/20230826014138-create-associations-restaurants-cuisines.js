const Promise = require('bluebird');

module.exports = {
	up: (queryInterface) => {
		const { sequelize } = queryInterface;
		return Promise.all([
			sequelize.query('SELECT id FROM "Restaurants"', {
				type: sequelize.QueryTypes.SELECT,
			}),
			sequelize.query('SELECT id FROM "Cuisines"', {
				type: sequelize.QueryTypes.SELECT,
			}),
		]).spread((restaurantIds, cuisineIds) => {
			const dinerCollections = [];
			restaurantIds.forEach((restaurantId) => {
				cuisineIds.forEach((cuisineId) => {
					dinerCollections.push({
						restaurantId: restaurantId.id,
						cuisineId: cuisineId.id,
						createdAt: new Date(),
						updatedAt: new Date(),
					});
				});
			});
			return queryInterface.bulkInsert(
				'RestaurantsCuisines',
				dinerCollections,
				{},
			);
		});
	},
	async down(queryInterface) {
		await queryInterface.bulkDelete('RestaurantsCuisines', null, {});
	},
};
