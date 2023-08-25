const express = require('express');

const router = express.Router();

const { newReservation, deleteReservation } = require('../controllers');

router.post('/', newReservation);
router.patch('/', deleteReservation);

module.exports = router;
