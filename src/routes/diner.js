const express = require('express');

const router = express.Router();

const { getDiners, newDiner } = require('../controllers');

router.post('/', newDiner);
router.get('/', getDiners);

module.exports = router;
