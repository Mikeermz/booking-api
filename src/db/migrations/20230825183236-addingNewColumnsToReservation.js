/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction();
		try {
			await queryInterface.removeColumn('Reservations', 'time', {
				transaction,
			});
			await queryInterface.addColumn(
				'Reservations',
				'time',
				{
					type: Sequelize.DATE,
				},
				{ transaction },
			);
			await queryInterface.addColumn(
				'Reservations',
				'date',
				{
					type: Sequelize.DATEONLY,
				},
				{ transaction },
			);
			await queryInterface.addColumn(
				'Reservations',
				'active',
				{
					type: Sequelize.BOOLEAN,
					defaultValue: true,
				},
				{ transaction },
			);
			await queryInterface.addColumn(
				'Reservations',
				'code',
				{
					type: Sequelize.STRING,
				},
				{ transaction },
			);
			await transaction.commit();
		} catch (err) {
			await transaction.rollback();
			throw err;
		}
	},
	async down(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction();
		try {
			await queryInterface.removeColumn('Reservations', 'time', {
				transaction,
			});
			await queryInterface.removeColumn('Reservations', 'date', {
				transaction,
			});
			await queryInterface.removeColumn('Reservations', 'active', {
				transaction,
			});
			await queryInterface.removeColumn('Reservations', 'code', {
				transaction,
			});
			await queryInterface.addColumn(
				'Reservations',
				'time',
				{
					type: Sequelize.DATE,
				},
				{ transaction },
			);
			await transaction.commit();
		} catch (err) {
			await transaction.rollback();
			throw err;
		}
	},
};
