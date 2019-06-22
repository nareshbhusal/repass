const express = require('express');
const db = require('./config/database');
const corsMiddleware = require('./middlewares/cors');
const cors = require('cors');
// Session and cookiesparser
const session = require('express-session');
const redis = require('redis');
const RedisStore = require('connect-redis')(session);

const app = express();
const uuid = require('uuid');
const routes = require('./routes/index');

// Create redis client
let client = redis.createClient();
client.on('connect', () => {
    console.log('Redis connected')
})

// Configure middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors middleware
app.use(corsMiddleware);
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
        secure: false,
        maxAge: 30 * 24 * 60 * 1000 // 30 days
    }
}));

// Initialise database
db.authenticate()
    .then(() => console.log('Database connected'))
    .catch((err) => console.log(err))

//Set routes
app.get('', (req, res)=> {
    return res.send(req.session)
})
app.use(routes);

module.exports = app;