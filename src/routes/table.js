const express = require('express');

const router = express.Router();

const { getTables } = require('../controllers');

router.get('/', getTables);

module.exports = router;
