const { v4: uuidv4 } = require('uuid');

module.exports = {
	async up(queryInterface) {
		await queryInterface.bulkInsert(
			'Tables',
			[
				{
					id: uuidv4(),
					seats: 1,
					location: 'inside',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: uuidv4(),
					seats: 2,
					location: 'inside',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: uuidv4(),
					seats: 4,
					location: 'inside',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: uuidv4(),
					seats: 6,
					location: 'inside',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: uuidv4(),
					seats: 8,
					location: 'inside',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: uuidv4(),
					seats: 1,
					location: 'outside',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: uuidv4(),
					seats: 2,
					location: 'outside',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: uuidv4(),
					seats: 4,
					location: 'outside',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: uuidv4(),
					seats: 6,
					location: 'outside',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: uuidv4(),
					seats: 8,
					location: 'outside',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		);
	},

	async down(queryInterface) {
		await queryInterface.bulkDelete('Tables', null, {});
	},
};
