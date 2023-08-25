const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Diner extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Diner.hasMany(models.Reservation, {
				foreignKey: 'dinerId',
			});
			Diner.belongsToMany(models.Cuisine, {
				foreignKey: 'dinerId',
				through: 'DinersCuisines',
			});
		}
	}
	Diner.init(
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			fullName: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Diner',
		},
	);
	return Diner;
};
