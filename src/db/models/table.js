const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Table extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Table.hasMany(models.Reservation, {
				foreignKey: 'tableId',
			});
			Table.belongsToMany(models.Restaurant, {
				foreignKey: 'restaurantId',
				through: 'RestaurantsTables',
			});
		}
	}
	Table.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			seats: DataTypes.INTEGER,
			location: DataTypes.ENUM('inside', 'outside'),
		},
		{
			sequelize,
			modelName: 'Table',
		},
	);
	return Table;
};
