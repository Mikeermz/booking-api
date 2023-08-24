const { v4: uuidv4 } = require('uuid');

module.exports = {
	async up(queryInterface) {
		await queryInterface.bulkInsert(
			'Cuisines',
			[
				{
					id: uuidv4(),
					type: 'Gluten Free',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: uuidv4(),
					type: 'Vegetarian',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: uuidv4(),
					type: 'Paleo',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: uuidv4(),
					type: 'Vegan',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		);
	},

	async down(queryInterface) {
		await queryInterface.bulkDelete('Cuisines', null, {});
	},
};
