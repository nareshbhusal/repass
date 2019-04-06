const express = require('express');
const router = express.Router();
const Sub = require('../models/Sub');

router.get('/:sub', (req, res) => {
    // res.send('this is supposed to be a sub');
    res.send(req.params);
})

// create post route
router.get('/:sub/create', (req, res) => {
    res.send('create your post');
})

router.post('/subs/create', (req, res) => {
    res.send('create a subreddit');
})


module.exports = router;