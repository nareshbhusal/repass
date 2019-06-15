const express = require('express');
const router = express.Router()
const getListing = require('./getListing');
const createListing = require('./createListing');


router.use('/:sub/:type/:postid/:commentid', getListing);
router.use('/:sub/:type/:postid/', getListing);

router.use('/:sub/:type', createListing);


module.exports = router;