const express = require('express');
const router = express.Router();

router.post('/user', (req, res) => {
    // res.send('create a user');
    res.send(req.body);
})

router.get('/sub', (req, res) => {
    res.send('create a sub');
})

module.exports = router;