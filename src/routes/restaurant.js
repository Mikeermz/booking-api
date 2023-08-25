const express = require('express');

const router = express.Router();

const { getRestaurants } = require('../controllers');

router.get('/', getRestaurants);

module.exports = router;
