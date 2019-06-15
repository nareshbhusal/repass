const express = require('express');
const router = express.Router();
const getUsers = require('./getUsers');
const getUser = require('./getUser');
const register = require('./register');

router.get('/users/', getUsers);
router.get('/users/register', register);
router.use('/u/:username', getUser);

module.exports = router;