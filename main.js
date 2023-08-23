require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const portfinder = require('portfinder');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Models
const models = require('./src/db/models');

models.sequelize.sync({ force: true, logging: false }).then(() => {
	models.sequelize.close();
});

portfinder.basePort = 8000;
portfinder.highestPort = 9000;

// Routes
const router = require('./src/routes');

app.use('/api/v1', router);

async function findPort(start = 8000) {
	const port = await portfinder.getPortPromise({
		port: start,
	});
	return port;
}

(async () => {
	const PORT = process.env.PORT || (await findPort());

	app.listen(PORT, () => {
		console.log(`Running app at http://localhost:${PORT}`);
		console.log('Press Ctrl+C to quit.');
	});
})();

module.exports = app;
