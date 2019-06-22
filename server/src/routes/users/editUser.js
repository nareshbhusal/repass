const updateUser = require('../../controllers/user/updateUser');

const editUser = async(req, res) => {
    try {
        const username = req.session.user.username;
        // const updatedUserProperties = { ...req.body };
        const updatedUserProperties = { ...req.query };

        await updateUser(username, { ...updatedUserProperties });
        return res.status(200).send({ msg: 'Edited user!' });
    } catch(err) {
        console.log(err);
        return res.status(500).send({err: 'Server error editing user :('});
    }
}

module.exports = editUser;