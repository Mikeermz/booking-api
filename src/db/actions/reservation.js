const { Op, Sequelize } = require('sequelize');

const { Reservation } = require('../models');

exports.findReservationByDiner = async (dinerId, date, preTime, postTime) => {
	try {
		const reservations = await Reservation.findAll({
			where: {
				[Op.and]: [
					{
						dinerId,
						active: true,
						date,
					},
					Sequelize.where(
						Sequelize.cast(Sequelize.col('time'), 'time'),
						'>=',
						preTime,
					),
					Sequelize.where(
						Sequelize.cast(Sequelize.col('time'), 'time'),
						'<=',
						postTime,
					),
				],
			},
			raw: true,
		});

		if (reservations.length === 0) return { message: 'no reservation found' };

		return reservations;
	} catch (error) {
		throw new Error(error);
	}
};

exports.createReservationByDiner = async (data) => {
	try {
		const reservation = await Reservation.create(data);

		return reservation;
	} catch (error) {
		throw new Error(error);
	}
};

exports.deleteReservationByDiner = async (code) => {
	try {
		const reservation = await Reservation.findOne({
			where: { code },
		});

		reservation.set({
			active: false,
		});

		await reservation.save();

		return reservation;
	} catch (error) {
		throw new Error(error);
	}
};
