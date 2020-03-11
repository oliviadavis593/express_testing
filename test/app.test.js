const app = require('../app');
const { expect } = require('chai'); //another way to require expect assertion from Chai 
const supertest = require('supertest')

describe('Express App', () => {
    it('should return a message of GET /', () => {
        return supertest(app)
            .get('/')
            .expect(200, 'Hello Express!');
    });
})