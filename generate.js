const express = require('express');
const morgan = require('morgan');
const generate = express();

generate.get('/generate', (req, res) => {
    //get n from the query string in the request
    const { n } = req.query; 

    //coerce n to a numeric value
    /*
    - parseInt converts 1st arg to string
    - parses (analyzes) that string 
    - then return an integer or Nan
    */
    const num = parseInt(n);

    if(isNaN(num)) {
        return res
            .status(400)
            .send('Invalid request');
    }

    //handler function for endpoint GET /generate 
    //that accepts positive integer n & generates an array of n elements
    //containing the #'s from 1 to n in random order
    //So /generate?n=5 may return the array [4, 3, 1, 5, 2] or [3, 5, 2, 1, 4]

    //generate array [1..n]
    const initial = Array(num)
        .fill(1)
        .map((_, i) => i + 1);

    //shuffle the array 
    initial.forEach((e, i) => {
        let ran = Math.floor(Math.random() * num);
        let temp = initial[i];
        initial[i] = initial[ran];
        initial[ran] = temp; 
    })
    res.json(initial);
})

module.exports = generate; 