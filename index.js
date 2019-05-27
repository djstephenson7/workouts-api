const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();


app.get('/', (req, res) => {
  res.send('App up and running.');
});

require('./app/startup/db')(mongoose);

console.log(`Application name: ${config.get('name')}`);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Connected to ${config.get('mail.host')} on port 3000...`));

module.exports = server;
