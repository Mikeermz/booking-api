const { v4: uuidv4 } = require('uuid');

module.exports = {
	async up(queryInterface) {
		await queryInterface.bulkInsert(
			'Diners',
			[
				{
					id: uuidv4(),
					fullName: 'Michael',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: uuidv4(),
					fullName: 'George Michael',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: uuidv4(),
					fullName: 'Lucile',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: uuidv4(),
					fullName: 'Gob',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: uuidv4(),
					fullName: 'Tobias',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: uuidv4(),
					fullName: 'Maeby',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		);
	},

	async down(queryInterface) {
		await queryInterface.bulkDelete('Diners', null, {});
	},
};
