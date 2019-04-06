const express = require('express');
const path = require('path');
const db = require('./config/database');

const app = express();

// Configure middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialise database
db.authenticate()
    .then(() => console.log('Database connected'))
    .catch((err) => console.log(err))

//Set routes
app.get('', (req, res) => {
    const data = [
        {name: 'Naresh', age: 19},
        {name: 'Ariadne', age: 19}
    ]
    res.send(data);
})

module.exports = app;