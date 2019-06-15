const User = require('../../models/User');
const updateSessionIDs = require('../../controllers/user/updateSessionIDs');

const registerUser = async(req, res) => {
    // const { username, email, password } = req.body;
    const { username, email, password } = req.query;
    // server side validation
    const errors = [];
    if (!username || !password || !email) {
        errors.push({ err: 'Please fill in all fields' });
        return res.send(errors);
    }

    // Check if the user already exists
    const userInRecords = await User.findOne({
        where: {
            username,
        }
    });
    if (userInRecords) {
        errors.push({ err: 'Username taken!' })
        return res.send(errors);
    }

    // create the user
    const user = await User.create({
        username,
        password,
        email
    });
    await updateSessionIDs();

    // 

    return res.send(user);
}

module.exports = registerUser;