const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing');

router.get('/:postId', (req, res) => {
    res.send('comments section of a post');
})

module.exports = router;