const { v4: uuidv4 } = require('uuid');

module.exports = {
	async up(queryInterface) {
		await queryInterface.bulkInsert(
			'Restaurants',
			[
				{
					id: uuidv4(),
					name: 'Cuerno',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: uuidv4(),
					name: 'Lady BBQ',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		);
	},

	async down(queryInterface) {
		await queryInterface.bulkDelete('Restaurants', null, {});
	},
};
