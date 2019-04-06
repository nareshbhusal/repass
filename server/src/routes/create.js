const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
    res.send('cerate a user');
})

router.get('/sub', (req, res) => {
    res.send('create a sub');
})

module.exports = router;