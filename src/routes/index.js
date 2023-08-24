const { Router } = require('express');

const router = Router();

const Diner = require('./diner');

router.get('/', (req, res) => res.status(200).json('Server on C:'));

// Diners
router.use('/diner', Diner);

router.all('*', (req, res) => res.status(400).json('Bad Request...'));

module.exports = router;
