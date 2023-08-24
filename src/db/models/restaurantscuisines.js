const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class RestaurantsCuisines extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			RestaurantsCuisines.belongsTo(models.Restaurant, {
				foreignKey: 'restaurantId',
			});
			RestaurantsCuisines.belongsTo(models.Cuisine, {
				foreignKey: 'cuisineId',
			});
		}
	}
	RestaurantsCuisines.init(
		{
			restaurantId: DataTypes.UUID,
			cuisineId: DataTypes.UUID,
		},
		{
			sequelize,
			modelName: 'RestaurantsCuisines',
		},
	);
	return RestaurantsCuisines;
};
