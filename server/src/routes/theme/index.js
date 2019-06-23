const express = require('express');
const router = express.Router();

const changeTheme = require('../theme/changeTheme');
const getTheme = require('../theme/getTheme');

router.get('/gettheme/', getTheme);
router.post('/changetheme/:theme', changeTheme);

module.exports = router;