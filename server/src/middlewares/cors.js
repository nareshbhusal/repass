const express = require('express');
const router = express.Router();

router.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials: true');
    res.header('Access-Control-Allow-Origin: *');
    res.header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token')
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log('Exec next')
    next();
});

module.exports = router;