const db = require('../src/db/models');

beforeAll(() => { db.sequelize.sync().then(()=>{ db.sequelize.close(); }) });

// afterAll(() => db.sequelize.close());

