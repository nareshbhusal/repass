const express = require('express');
const router = express.Router();
const Sub = require('../models/Sub');


router.get('/', (req, res) => {
    res.send('front page')
})

router.get('/:subreddit', (req, res) => {
    res.send('this is supposed to be a sub');
})

router.get('/subs/create', (req, res) => {
    res.send('create a subreddit');
})

router.get()

module.exports = router;