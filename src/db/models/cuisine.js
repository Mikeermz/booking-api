const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Cuisine extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Cuisine.belongsToMany(models.Diner, {
				foreignKey: 'dinerId',
				through: 'DinersCuisines',
			});
			Cuisine.belongsToMany(models.Restaurant, {
				foreignKey: 'dinerId',
				through: 'RestaurantsCuisines',
			});
		}
	}
	Cuisine.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			type: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Cuisine',
		},
	);
	return Cuisine;
};
