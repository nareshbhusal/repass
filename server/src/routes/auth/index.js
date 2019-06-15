const express = require('express');
const router = express.Router();
const login = require('./login');
const logout = require('./logout');

router.get('/login', login);
router.get('/logout', logout);

module.exports = router;