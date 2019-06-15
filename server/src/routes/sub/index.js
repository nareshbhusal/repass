const express = require('express');
const router = express.Router()
const getSubs = require('./getSubs');
const getSub = require('./getSub');
const createSub = require('./createSub');

router.use('/subs', getSubs);
router.use('/r/:sub/create', createSub);
router.use('/r/:sub', getSub);

module.exports = router;