const User = require('../../models/User');

const getCurrentUser = async(req, res) => {
    const username= req.session.user.username;

    try {
        const user = await User.findOne({
            where: {
                username
            }
        });
        if (!user) {
            return res.status(404).send({ err: 'User not found' });
        }
        return res.status(200).send(user);

    } catch(err) {
        console.log(err);
        return res.status(500).send({err: 'server error'});
    }
}

module.exports = getCurrentUser;