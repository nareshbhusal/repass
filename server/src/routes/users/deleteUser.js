const User = require('../../models/User');

const deleteUser = async(req, res) => {
    if (req.session.user.username !== req.params.username) {
        return res.status(403).send({err: 'Cannot delete user. Not authenticated'});
    }
    const username = req.params.username;
    try {
        await User.destroy({
            where: {
                username
            }
        });
        return res.status(200).send({ msg: 'Deleted user' });
    } catch(err) {
        console.log(err);
        res.status(500).send({err: 'Couldn\'t delete user. Server error!'});
    }
}

module.exports = deleteUser;