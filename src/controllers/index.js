const Diner = require('./diner');
const Table = require('./table');
const Restaurant = require('./restaurant');
const Reservation = require('./reservation');

module.exports = {
	...Diner,
	...Table,
	...Restaurant,
	...Reservation,
};
