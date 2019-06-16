const express = require('express');
const router = express.Router()
const getListing = require('./getListing');
const createListing = require('./createListing');
const editListing = require('./editListing');
const deleteListing = require('./deleteListing');

router.post('/:sub/:id', createListing);
router.post('/:sub/', createListing);
router.use('/:sub/:id', editListing); //put
router.use('/:sub/:id/', getListing);
router.delete('/:sub/:id', deleteListing);
router.delete('/:id', deleteListing);

module.exports = router;