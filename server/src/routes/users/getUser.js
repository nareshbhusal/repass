const User = require('../../models/User');

const getUser = async(req, res) => {
    const username= req.params.username;

    try {
        const user = await User.findOne({
            where: {
                username
            }
        });
        return res.send(user);

    } catch(err) {
        console.log(err);
        return res.send('server error');
    }
}

module.exports = getUser;