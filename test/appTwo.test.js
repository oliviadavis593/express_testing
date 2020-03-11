const sum = require('../sum');
const { expect } = require('chai');
const supertest = require('supertest');

describe('GET /sum', () => {
    //Testing normal cases 
    //Used the .query method in SuperTest
    it('8/4 should be 2', () => {
        return supertest(sum)
            .get('/sum')
            .query({ a: 8, b:4})
            .expect(200, '8 divided by 4 is 2')
    })

    //Test for various error conditions
    it(`should return 400 if 'a' is missing`, () => {
        return supertest(sum)
            .get('/sum')
            .query({b: 4})
            .expect(400, 'Value for a is needed')
    })
})