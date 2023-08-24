const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class DinersCuisines extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			DinersCuisines.belongsTo(models.Diner, {
				foreignKey: 'dinerId',
			});
			DinersCuisines.belongsTo(models.Cuisine, {
				foreignKey: 'cuisineId',
			});
		}
	}
	DinersCuisines.init(
		{
			dinerId: DataTypes.UUID,
			cuisineId: DataTypes.UUID,
		},
		{
			sequelize,
			modelName: 'DinersCuisines',
		},
	);
	return DinersCuisines;
};
