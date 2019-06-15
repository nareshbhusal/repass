const User = require('../../models/User');

const getUser = async(req, res) => {
    const user = await User.findOne({
        username: req.params.username
    });
    res.send(user);
}

module.exports = getUser;