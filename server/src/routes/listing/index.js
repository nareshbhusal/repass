const express = require('express');
const router = express.Router()
const getListing = require('./getListing');
const createListing = require('./createListing');
const editListing = require('./editListing');
const deleteListing = require('./deleteListing');
const voteListing = require('./voteListing');
const getListings = require('./getListings');

const requireLogin = require('../../middlewares/requireLogin');

router.post('/r/:sub/:id',requireLogin,  createListing); // commenting
router.post('/r/:sub/', requireLogin, createListing);
router.post('/:id/vote/:type', requireLogin, voteListing);
router.put('/r/:sub/:id', requireLogin, editListing); //put
router.get('/listing/:id/', getListing);
router.get('/r/:sub/:id/', getListing);
router.delete('/r/:sub/:id', requireLogin, deleteListing);
router.delete('/:id', requireLogin, deleteListing);

router.get('/listings/u/:username', getListings);
router.get('/listings/r/:sub', getListings);
module.exports = router;