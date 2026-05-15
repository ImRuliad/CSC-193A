'use strict';
const express = require('express');
const app     = express();

// Exercise 1: Splendid Circles



// Exercise 2: Hello, you!




app.use(express.static('public'));
const PORT = process.env.port || 8000;
app.listen(PORT);
