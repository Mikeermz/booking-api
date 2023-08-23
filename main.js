require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
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

portfinder.getPort((err, port) => {
	if (err) {
		console.log(err);
	} else {
		app.set('port', port);
		const server = http.createServer(app);
		server.listen(port, () => {
			console.log(`server started at http://127.0.0.1:${port}`);
			console.log(`server started at http://localhost:${port}`);
		});
	}
});

module.exports = app;
