const { Router } = require('express');

const router = Router();

const Diner = require('./diner');
const Table = require('./table');
const Restaurant = require('./restaurant');
const Reservation = require('./reservation');

router.get('/', (req, res) => res.status(200).json('Server on C:'));

// Diners
router.use('/diner', Diner);

// Tables
router.use('/table', Table);

// Restaurants
router.use('/restaurant', Restaurant);

// Reservation
router.use('/reservation', Reservation);

router.all('*', (req, res) => res.status(400).json('Bad Request...'));

module.exports = router;
