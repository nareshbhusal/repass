const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/:username', (req, res) => {
    res.send('this is the profile of a user ')
})

module.exports = router;