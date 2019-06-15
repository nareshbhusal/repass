const express = require('express');
const router = express.Router();
const getUsers = require('./getUsers');
const getUser = require('./getUser');

router.use('/users/', getUsers);
router.use('/u/:username', getUser);

module.exports = router;