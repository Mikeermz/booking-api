const Promise = require('bluebird');

module.exports = {
	up: (queryInterface) => {
		const { sequelize } = queryInterface;
		return Promise.all([
			sequelize.query('SELECT id FROM "Restaurants"', {
				type: sequelize.QueryTypes.SELECT,
			}),
			sequelize.query('SELECT id FROM "Tables"', {
				type: sequelize.QueryTypes.SELECT,
			}),
		]).spread((restaurantIds, tableIds) => {
			const dinerCollections = [];
			restaurantIds.forEach((restaurantId) => {
				tableIds.forEach((tableId) => {
					dinerCollections.push({
						restaurantId: restaurantId.id,
						tableId: tableId.id,
						createdAt: new Date(),
						updatedAt: new Date(),
					});
				});
			});
			return queryInterface.bulkInsert(
				'RestaurantsTables',
				dinerCollections,
				{},
			);
		});
	},
	async down(queryInterface) {
		await queryInterface.bulkDelete('RestaurantsTables', null, {});
	},
};
