const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.status(200).json('Server on C:'));

router.all('*', (req, res) => res.status(400).json('Bad Request...'));

module.exports = router;
