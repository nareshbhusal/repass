const updateUser = require('../../controllers/user/updateUser');

const editUser = async(req, res) => {
    try {
        const username = req.session.user.username;
        // const updatedUserProperties = { ...req.body };
        const updatedUserProperties = { ...req.query };

        await updateUser(username, { ...updatedUserProperties });
        return res.send({ msg: 'Done!' });
    } catch(err) {
        console.log(err);
        return res.send(':(');
    }
}

module.exports = editUser;