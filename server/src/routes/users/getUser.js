const User = require('../../models/User');

const getUser = async(req, res) => {
    const username= req.params.username;

    try {
        const user = await User.findOne({
            where: {
                username
            }
        });
        if (user) {
            return res.status(201).send(user);
        } else {
            return res.status(404).send({err: 'User not found'});
        }

    } catch(err) {
        console.log(err);
        return res.status(500).send('server error');
    }
}

module.exports = getUser;