const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Reservation extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Reservation.belongsTo(models.Table, {
				foreignKey: 'tableId',
				target_key: 'tableId',
			});
			Reservation.belongsTo(models.Diner, {
				foreignKey: 'dinerId',
				target_key: 'dinerId',
			});
		}
	}
	Reservation.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			tableId: DataTypes.UUID,
			dinerId: DataTypes.UUID,
			time: DataTypes.DATE,
			date: DataTypes.DATEONLY,
			active: {
				type: DataTypes.BOOLEAN,
				defaultValue: true,
			},
			code: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Reservation',
		},
	);
	return Reservation;
};
