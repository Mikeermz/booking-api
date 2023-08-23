const request = require('supertest');
const app = require('../../main');

describe('get home', () => {
	it('should return 200', async () => {
		const response = await request(app)
			.get('/api/v1')
			.set('content-type', 'application/json');

		expect(response.status).toBe(200);
		expect(response.body).toBe('Server on C:');
	});

	it('should not return 404', async () => {
		const response = await request(app)
			.get('/api/v1')
			.set('content-type', 'application/json');

		expect(response.status).not.toBe(404);
	});
});
