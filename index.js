const express = require('express');
const mongoose = require('mongoose');
const db = mongoose.connection;
const app = express();

app.get('/', (req, res) => {
  res.send('App up and running.');
});

mongoose.connect('mongodb://localhost/workoutapi', {useNewUrlParser: true});

db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', () => console.log('Connecting to db...'));

app.listen(3000, () => console.log('Listening on port 3000...'));
