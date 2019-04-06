const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing');

router.get('/', (req, res) => {
    res.send('comments section of a post');
})

router.get('/:threadId', (req, res) => {
    res.send('a particular thread on a post');
})

module.exports = router;