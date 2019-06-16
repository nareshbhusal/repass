const express = require('express');
const router = express.Router()
const getListing = require('./getListing');
const createListing = require('./createListing');
const editListing = require('./editListing');


router.post('/:sub/:id', createListing);
router.post('/:sub/', createListing);
router.use('/:sub/:type/:id', editListing); //put
router.use('/:sub/:id/', getListing);

router.use('/:sub/:type', createListing);


module.exports = router;