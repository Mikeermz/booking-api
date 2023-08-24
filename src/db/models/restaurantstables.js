const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class RestaurantsTables extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			RestaurantsTables.belongsTo(models.Restaurant, {
				foreignKey: 'restaurantId',
			});
			RestaurantsTables.belongsTo(models.Table, {
				foreignKey: 'tableId',
			});
		}
	}
	RestaurantsTables.init(
		{
			restaurantId: DataTypes.UUID,
			tableId: DataTypes.UUID,
		},
		{
			sequelize,
			modelName: 'RestaurantsTables',
		},
	);
	return RestaurantsTables;
};
