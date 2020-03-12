const { expect } = require('chai');
const generate = require('../generate');
const supertest = require('supertest');

//To fully test the response data => we need some way to acces the response itself
//To access response => add .then() handler to request chainf 
//Supertest  works w. Promises by passing the response to the then handler
describe('GET /generate endpoint', () => {
    it('should generate an array of 5', () => {
        return supertest(generate)
            .get('/generate') //invoke the endpoint
            .query({ n: 5 }) //send the query string ?n=5
            .expect(200) //assert that you get a 200 OK status
            .then(res => {
                //make sure you get an array
                expect(res.body).to.be.an('array');
                //array must not be empty
                //.have => ensures that values being compared are the only ones present
                expect(res.body).to.have.lengthOf.at.least(1);
                // this assertion fails 
                //because return array is randomly ordered
                //expect(res.body).to.eql([1, 2, 3, 4, 5]);

                //DO THIS INSTEAD:

                //Use .include => verifies that the value n is present
                //in the result without caring for its position
                //expect(res.body).to.include(5);

                //OR DO THIS INSTEAD:
                //may wish to ensure that all the values are included
                //.include => simply check that each of the given values is present
                //but doesn't care if there's extra values 
                //expect(res.body).to.include.members([1, 2, 3, 4, 5]);

                //OR DO THIS INSTEAD: 
                //Optionally we can use .a to verify the type 
                //And .have or .include in a single chain like so: 
                expect(res.body).to.be.an('array').that.have.members([1, 2, 3, 4, 5]);
            })
    })
})