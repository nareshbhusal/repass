const express = require('express');
const router = express.Router();
const authRouter = require('./auth/index');
const subsRouter = require('./subs/index');
const subRouter = require('./sub/index');
const usersRouter = require('./users/index');

router.use('/', authRouter);
router.use('/subs', subsRouter);
router.use('/r', subRouter);
router.use('/', usersRouter);

module.exports = router;