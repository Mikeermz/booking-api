const db = require('../src/db/models');

afterAll(() => db.sequelize.close());
