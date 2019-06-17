const express = require('express');
const router = express.Router();
const authRouter = require('./auth/index');
const subRouter = require('./sub/index');
const usersRouter = require('./users/index');
const listingRouter = require('./listing/index');

router.use('/', authRouter);
router.use('/r/', listingRouter);
router.use('/', subRouter);
router.use('/', usersRouter);
router.use('', (req, res) => {
    return res.status(404).send('404');
})

module.exports = router;