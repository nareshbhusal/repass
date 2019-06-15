const express = require('express');
const router = express.Router();
const getUsers = require('./getUsers');
const getUser = require('./getUser');
const register = require('./register');
const editUser = require('./editUser');
const deleteUser = require('./deleteUser');

router.get('/users/', getUsers);
router.get('/users/register', register);
router.use('/u/:username/edit', editUser);
router.use('/u/:username/delete', deleteUser);
router.use('/u/:username/', getUser);

module.exports = router;