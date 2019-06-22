const User = require('../../models/User');
const updateSessionIDs = require('../../controllers/user/updateSessionIDs');
const addCookie = require('../../controllers/user/addCookie');

const registerUser = async(req, res) => {
    const { username, email, password } = req.body;
    // const { username, email, password } = req.query;
    // server side validation

    if (!username || !password || !email) {
        const error = { err: 'Please fill in all fields' };
        return res.status(403).send(error);
    }
    try {
        // Check if the user already exists
        const userInRecords = await User.findOne({
            where: {
                username
            }
        });
        if (userInRecords) {
            const error = { err: 'Username taken!' };
            return res.status(409).send(error);
        }

        // create the user
        const user = {
            username,
            password,
            email,
            createdAt: new Date().getTime().toString()
        }
        const newUser = await User.create(user);
        await updateSessionIDs(req, newUser);
        addCookie(req, newUser);
        return res.status(201).send(newUser.username);

    } catch(err) {
        console.log(err);
        return res.status(500).send('Server error while trying to register user');
    }
    
}

module.exports = registerUser;