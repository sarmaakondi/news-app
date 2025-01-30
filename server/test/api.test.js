const request = require('supertest');

const app = require('../src/app');

describe('GET /api/v1/search', () => {
  it('responds with articles array on valid search', (done) => {
    request(app)
      .get('/api/v1/search?q=test')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('responds with 400 when missing search term', (done) => {
    request(app)
      .get('/api/v1/search')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
  });
});
