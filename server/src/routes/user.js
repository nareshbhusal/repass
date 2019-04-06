const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

router.get('/:username', (req, res) => {
    res.send('this is the profile of user '+req.params.username)
})

router.get('/register', (req, res) => {
    res.send('register user');
})

module.exports = router;