const express = require('express');
const router = express.Router()
const getSubs = require('./getSubs');
const getSub = require('./getSub');
const createSub = require('./createSub');
const deleteSub = require('./deleteSub');
const editSub = require('./editSub');

router.use('/subs', getSubs);
router.get('/r/:sub/create', createSub);
router.delete('/r/:sub/delete', deleteSub);
router.use('/r/:sub', getSub);

module.exports = router;