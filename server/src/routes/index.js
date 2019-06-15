const express = require('express');
const router = express.Router()
const subsRouter = require('./subs/index');
const subRouter = require('./sub/index');

router.use('/subs', subsRouter);
router.use('/r', subRouter);

module.exports = router;