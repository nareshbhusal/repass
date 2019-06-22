const express = require('express');
const router = express.Router()
const getSubs = require('./getSubs');
const getSub = require('./getSub');
const createSub = require('./createSub');
const deleteSub = require('./deleteSub');
const editSub = require('./editSub');
const subscribe = require('./subscribe');

const requireLogin = require('../../middlewares/requireLogin');

router.get('/subs', getSubs);
router.post('/subs/create', requireLogin, createSub);
router.get('/r/:sub', getSub);
router.post('/subscribe/:sub/', requireLogin, subscribe);
router.put('/r/:sub', requireLogin, editSub);
router.delete('/r/:sub/', requireLogin, deleteSub);

module.exports = router;
