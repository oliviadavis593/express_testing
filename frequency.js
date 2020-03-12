const express = require('express');
const morgan = require('morgan');
const frequency = express();

//Write an endpoint handler GET /frequency 
//Accepts a String s 
//Count the frequency of occurrence of each character in the String 
//total number of distinct characters => average frequency => character w. highest frequency
frequency.get('/frequency', (req, res) => {
    const { s } = req.query; 

    if(!s) {
        return res
            .status(400)
            .send('Invalid request')
    }

    const count = s
        .toLowerCase()
        .split(' ')
        .reduce((acc, curr) => {
            if (acc[curr]) {
                acc[curr]++; 
            } else {
                acc[curr] = 1; 
            }
            return acc; 
        }, {})

        const unique = Object.keys(counts).length; 
        const average = s.length / unique; 
        let highest = '';
        let highestVal = 0; 

        Object.keys(counts).forEach(k => {
            if (counts[s] > highestVal) {
                highestVal = counts[k];
                highest = k;
            }
        });
        
        counts.unique = unique; 
        counts.average = average; 
        counts.highest = highest; 
        res.json(counts);
})

module.exports = frequency; 