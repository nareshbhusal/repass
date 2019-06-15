const express = require('express');
const router = express.Router()
const getSub = require('./getSub');

router.use('/:sub', getSub);

module.exports = router;