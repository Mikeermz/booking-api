require('dotenv').config();

module.exports = {
	development: {
		database: process.env.DEV_DB_NAME,
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		dialect: 'postgres',
		logging: false,
	},
	test: {
		database: process.env.TEST_DB_NAME,
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		dialect: 'postgres',
		logging: false,
	},
	production: {
		url: process.env.DATABASE_URL,
		dialect: 'postgres',
	},
};
