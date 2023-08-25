const {
	createReservationByDiner,
	deleteReservationByDiner,
} = require('../db/actions');

const makeid = (length) => {
	let result = '';
	// eslint-disable-next-line prettier/prettier, operator-linebreak
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	let counter = 0;
	while (counter < length) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
		counter += 1;
	}
	return result;
};

exports.newReservation = async (req, res) => {
	try {
		const code = makeid(6);

		const data = {
			...req.body,
			code,
		};

		const reservation = await createReservationByDiner(data);

		res.status(200).json({ reservation });
	} catch (error) {
		res.status(404).send(error.message ? error.message : { error });
	}
};

exports.deleteReservation = async (req, res) => {
	try {
		const { code } = req.query;

		const reservation = deleteReservationByDiner(code);

		res.status(200).json({ reservation, message: 'update reservation' });
	} catch (error) {
		res
			.status(404)
			.json({ message: error.message ? error.message : { error } });
	}
};
