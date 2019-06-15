
const addCookie = (req, user) => {
    req.session.user = {};
    req.session.user.username = user.username;
}

module.exports = addCookie;