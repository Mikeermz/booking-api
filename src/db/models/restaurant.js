const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Restaurant extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Restaurant.belongsToMany(models.Cuisine, {
				foreignKey: 'restaurantId',
				through: 'RestaurantsCuisines',
			});
			Restaurant.belongsToMany(models.Table, {
				foreignKey: 'restaurantId',
				through: 'RestaurantsTables',
			});
		}
	}
	Restaurant.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			name: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Restaurant',
		},
	);
	return Restaurant;
};
