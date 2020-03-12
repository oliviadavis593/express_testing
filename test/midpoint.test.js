const { expect } = require('chai');
const midpoint = require('../midpoint');
const supertest = require('supertest');

//We're interested in the shape of the object returned as well as the calculations 
//A test using midpoint between New York City & Los Angeles: 

describe('GET /midpoint endpoint', () => {
    it('should find midpoint between NY and LA', () => {
      const query = {
        lat1: 40.6976701, //NY
        lon1: -74.2598674, //NY
        lat2: 34.0207305, //LA
        lon2: -118.6919221 //LA
      };
  
      // somewhere near Aurora, Kansas
      const expected = {
        lat: 39.50597300917347,
        lon: -97.51789156106972
      };
  
      return supertest(midpoint)
        .get('/midpoint')
        .query(query)
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
          expect(res.body).to.have.all.keys('lat', 'lon');
          expect(res.body).to.eql(expected);
        });
    })
  });