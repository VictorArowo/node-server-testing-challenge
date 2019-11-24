const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
  describe('index route', () => {
    it('can successfully signup', async () => {
      return request(server)
        .post('/api/signup')
        .set('Accept', 'application/json')
        .send({ username: 'john', password: 'test', department: 'sales' })
        .expect(201);
    });

    it('unsuccessfully login', async () => {
      return request(server)
        .post('/api/login')
        .set('Accept', 'application/json')
        .send({ username: 'john', password: 'test' })
        .expect(500);
    });
  });
});
