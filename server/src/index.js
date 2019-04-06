const express = require('express');
const db = require('./config/database');
const userRouter = require('./routes/user');
const subRouter = require('./routes/sub');
const commentsRouter = require('./routes/comments');
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
    res.send('welcome to the frontpage');
});

app.use('/r', subRouter);
app.use('/u', userRouter);
app.use('/r/:sub/comments', commentsRouter);

module.exports = app;