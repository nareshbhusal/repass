const express = require('express');
const router = express.Router()
const getListing = require('./getListing');
const createListing = require('./createListing');
const editListing = require('./editListing');
const deleteListing = require('./deleteListing');
const voteListing = require('./voteListing');

const requireLogin = require('../../middlewares/requireLogin');

router.post('/:sub/:id',requireLogin,  createListing);
router.post('/:sub/', requireLogin, createListing);
router.put('/:sub/:id', requireLogin, editListing); //put
router.get('/:sub/:id/', getListing);
router.delete('/:sub/:id', requireLogin, deleteListing);
router.post('/:id', requireLogin, voteListing);
router.delete('/:id', requireLogin, deleteListing);

module.exports = router;