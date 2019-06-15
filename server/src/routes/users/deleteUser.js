const User = require('../../models/User');

const deleteUser = async(req, res) => {
    if (req.session.user.username !== req.params.username) {
        return res.send([{err: 'Cannot delte the user. Not authenticated'}]);
    }
    const username = req.params.username;
    try {
        await User.destroy({
            where: {
                username
            }
        });
        return res.send({ msg: 'Deleted the user' });
    } catch(err) {
        console.log(err);
        res.send(':)');
    }
}

module.exports = deleteUser;