const express = require('express');
  const morgan = require('morgan');
  const app = express();

  app.use(morgan('common'));

  app.get('/', (req, res) => {
    res
      .send('Hello Express!');
  });

module.exports = app; 