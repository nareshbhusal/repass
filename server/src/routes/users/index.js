const express = require('express');
const router = express.Router();
const getUsers = require('./getUsers');
const getUser = require('./getUser');
const register = require('./register');
const editUser = require('./editUser');

router.get('/users/', getUsers);
router.get('/users/register', register);
router.use('/u/:username/edit', editUser);
router.use('/u/:username/', getUser);

module.exports = router;