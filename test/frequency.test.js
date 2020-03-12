const { expect } = require('chai');
const supertest = require('supertest');
const frequency = require('../frequency');

//
describe('GET /frequency endpoint', () => {
    it('should get the average', () => {
        return supertest(frequency)
            .get('/frequency')
            .query({s: 4.5 })
            .expect(200)
            .then(res => {
                expect(res.body).to.eql()
            })
    })

    it('should get the highest', () => {

    })

    it('should get the unique', () => {

    })

    it('if character tie then return closest to beginning of alphabet', () => {

    })

    it('throw error if string undefined')
})