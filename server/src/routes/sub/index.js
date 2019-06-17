const express = require('express');
const router = express.Router()
const getSubs = require('./getSubs');
const getSub = require('./getSub');
const createSub = require('./createSub');
const deleteSub = require('./deleteSub');
const editSub = require('./editSub');

const requireLogin = require('../../middlewares/requireLogin');

router.get('/subs', getSubs);
router.get('/r/:sub', getSub);
router.post('/r/:sub/create', requireLogin, createSub);
router.put('/r/:sub', requireLogin, editSub);
router.delete('/r/:sub/delete', requireLogin, deleteSub);

module.exports = router;