const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
    // res.send('create a user');
    res.send(req.query);
})

router.get('/sub', (req, res) => {
    res.send('create a sub');
})

module.exports = router;