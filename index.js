const express = require('express');
const mongoose = require('mongoose');
// const config = require('config');

const app = express();


app.get('/', (req, res) => {
  res.send('App up and running.');
});

require('./app/startup/db')(mongoose);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Connected on port ${port}...`));

module.exports = server;
