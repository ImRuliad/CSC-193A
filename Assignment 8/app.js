'use strict';
const express = require('express');
const app     = express();

// Exercise 1: Splendid Circles
app.get('/math/circle/:r', function(req, res) {
    const RADIUS = parseFloat(req.params['r']);
    const AREA = Math.PI * RADIUS * RADIUS;
    const CIRCUMFERENCE = Math.PI * 2 * RADIUS;
    res.json({ area: AREA, circumference: CIRCUMFERENCE });
  });


// Exercise 2: Hello, you!
app.get('/hello/name', function(req, res) {
    const first = req.query['first'];
    const last = req.query['last'];
    const MISSING_REQUIRED_GET_PARAMETERS = 'Missing Required GET parameters: first, last';
    const MISSING_REQUIRED_GET_PARAMETERS_FIRST = 'Missing Required GET parameters: first';
    const MISSING_REQUIRED_GET_PARAMETERS_LAST = 'Missing Required GET parameters: last';
    const HELLO = 'Hello ' + first + ' ' + last;
   
    if (!first && !last) {
      res.type('text').status(400).send(MISSING_REQUIRED_GET_PARAMETERS);
    } else if (!first) {
      res.type('text').status(400).send(MISSING_REQUIRED_GET_PARAMETERS_FIRST);
    } else if (!last) {
      res.type('text').status(400).send(MISSING_REQUIRED_GET_PARAMETERS_LAST);
    } else {
      res.type('text').send(HELLO);
    }
  });

app.use(express.static('public'));
const PORT = process.env.port || 8000;
app.listen(PORT);
