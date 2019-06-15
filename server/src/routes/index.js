const express = require('express');
const router = express.Router();
const authRouter = require('./auth/index');
const subRouter = require('./sub/index');
const usersRouter = require('./users/index');

router.use('/', authRouter);
router.use('/', subRouter);
router.use('/', usersRouter);

module.exports = router;