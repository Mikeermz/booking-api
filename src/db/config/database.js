require('dotenv').config();

module.exports = {
	development: {
		database: process.env.DEV_DB_NAME,
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		dialect: 'postgres',
		logging: false,
		dialectOptions: {
			useUTC: false, // for reading from database
			dateStrings: true,
			typeCast: true,
		},
		timezone: 'Asia/Calcutta',
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
