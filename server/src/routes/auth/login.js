const User = require('../../models/User');
const updateSessionIDs = require('../../controllers/user/updateSessionIDs');
const addCookie = require('../../controllers/user/addCookie');

const login = async(req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        const error = { err: 'Please fill in all fields' }
        return res.status(403).send(error);
    }
    try {
        const user = await User.findOne({
            where: {
                username,
                password
            }
        });
        if (!user) {
            const error = { err: 'Wrong username or password' };
            return res.status(400).send(error);
        }
        await updateSessionIDs(req, user);
        addCookie(req, user);
        return res.status(200).send(user.username);

    } catch(err) {
        console.log(err);
        return res.status(500).send(':(');
    }
}

module.exports = login;