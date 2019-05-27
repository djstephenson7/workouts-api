const mongoose = require('mongoose');

describe('/api/workouts', () => {
  let server;

  describe('GET /', () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'test',
      server = require('../../../index.js');
    });

    afterEach(async () => {
      await server.close();
      await mongoose.disconnect();
    });

    it('Should return all workouts', () => {
    });
  });
});
