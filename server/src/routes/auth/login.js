const User = require('../../models/User');
const updateSessionIDs = require('../../controllers/user/updateSessionIDs');
const addCookie = require('../../controllers/user/addCookie');

const login = async(req, res) => {
    const { username, password } = req.body;
    // const { username, password } = req.query;
    const errors = [];
    if (!username || !password) {
        errors.push({ err: 'Please fill all fields' });
        return res.status(403).send(errors);
    }
    try {
        const user = await User.findOne({
            where: {
                username,
                password
            }
        });
        if (!user) {
            errors.push({ err: 'Wrong username or password' });
            return res.status(400).send(errors);
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