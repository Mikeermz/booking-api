/* eslint-disable object-curly-newline */
const {
	findRestaurant,
	findDinerByName,
	findReservationByDiner,
} = require('../db/actions');

exports.getRestaurants = async (req, res) => {
	try {
		const { fullName, guest, date, time } = req.query;

		const diner = await findDinerByName(fullName);

		const { Cuisines, id: dinerId } = diner;
		const preTime = `${(Number(time.split(/:/)[0]) - 2).toString()}:00`;
		const postTime = `${(Number(time.split(/:/)[0]) + 2).toString()}:00`;

		const reserv = await findReservationByDiner(
			dinerId,
			date,
			preTime,
			postTime,
		);

		if (!reserv.message) throw new Error('Ya cuentas con una reservacion');

		const cuisineTypes = Cuisines.map((item) => item.type);

		const data = await findRestaurant(cuisineTypes, guest);

		res.status(200).json({ data });
	} catch (error) {
		res
			.status(404)
			.json({ message: error.message ? error.message : { error } });
	}
};
