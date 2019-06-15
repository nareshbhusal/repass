
function cors (req, res, next) {
    res.header('Access-Control-Allow-Credentials: true');
    res.header('Access-Control-Allow-Origin: *');
    res.header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token')
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    next();
}

module.exports = cors;