const Promise = require('bluebird');

module.exports = {
	up: (queryInterface) => {
		const { sequelize } = queryInterface;
		return Promise.all([
			sequelize.query('SELECT id FROM "Diners"', {
				type: sequelize.QueryTypes.SELECT,
			}),
			sequelize.query('SELECT id FROM "Cuisines"', {
				type: sequelize.QueryTypes.SELECT,
			}),
		]).spread((dinerIds, cuisineIds) => {
			const dinerCollections = [];
			dinerIds.forEach((dinerId) => {
				cuisineIds.forEach((cuisineId) => {
					dinerCollections.push({
						dinerId: dinerId.id,
						cuisineId: cuisineId.id,
						createdAt: new Date(),
						updatedAt: new Date(),
					});
				});
			});
			return queryInterface.bulkInsert('DinersCuisines', dinerCollections, {});
		});
	},
	async down(queryInterface) {
		await queryInterface.bulkDelete('DinersCuisines', null, {});
	},
};
