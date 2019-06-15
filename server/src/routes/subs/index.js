const express = require('express');
const router = express.Router()

router.use('subs', (req, res) => {
    res.send('subs');
})

module.exports = router;