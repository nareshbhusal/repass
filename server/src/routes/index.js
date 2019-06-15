const express = require('express');
const router = express.Router()
const subsRouter = require('./subs/index');
const subRouter = require('./sub/index');
const usersRouter = require('./users/index');

router.use('/subs', subsRouter);
router.use('/r', subRouter);
router.use('/', usersRouter);

module.exports = router;