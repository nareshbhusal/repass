const express = require('express');
const db = require('./config/database');
const loginRouter = require('./routes/login');
const userRouter = require('./routes/user');
const subRouter = require('./routes/sub');
const commentsRouter = require('./routes/comments');
const createRouter = require('./routes/create');
const corsMiddleware = require('./middlewares/cors');
const cors = require('cors');
// Session and cookiesparser
const session = require('express-session');
const redis = require('redis');
const RedisStore = require('connect-redis')(session);
const app = express();
const uuid = require('uuid');

// Create redis client
let client = redis.createClient();
client.on('connect', () => {
    console.log('Redis connected')
})

// Configure middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors middleware
// app.use(corsMiddleware);
app.use(cors({ credentials: true, origin: true }));

// express cookies
app.use(session({
    genid: function(req) {
        return uuid(); //use UUIDs for session IDs
    },
    secret: 'ssssshhhh',
    saveUninitialized: true,
    resave: true,
    store: new RedisStore({ client }),
    cookie: {
        maxAge: 30 * 24 * 60 * 1000 // 30 days
    }
}));

// Initialise database
db.authenticate()
    .then(() => console.log('Database connected'))
    .catch((err) => console.log(err))

//Set routes
app.get('', (req, res) => {
    res.send('welcome to the frontpage');
});

app.use('/login', loginRouter);

app.post('/logout', (req, res) => {
    // res.send('Logout');
    res.send(req.body);
})

app.use('/r', subRouter);
app.use('/u', userRouter);
app.use('/r/:sub/:postId/comments', commentsRouter);
app.use('/create', createRouter);

module.exports = app;