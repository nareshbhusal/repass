const User = require('../../models/User');
const updateSessionIDs = require('../../controllers/user/updateSessionIDs');
const addCookie = require('../../controllers/user/addCookie');

const registerUser = async(req, res) => {
    const { username, email, password } = req.body;
    // const { username, email, password } = req.query;
    // server side validation
    let errors = [];
    if (!username || !password || !email) {
        errors.push({ err: 'Please fill in all fields' });
        return res.status(403).send(errors);
    }
    try {
        // Check if the user already exists
        const userInRecords = await User.findOne({
            where: {
                username
            }
        });
        errors= [];
        if (userInRecords) {
            errors.push({ err: 'Username taken!' })
            return res.status(409).send(errors);
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
        return res.status(500).send(':(')
    }
    
}

module.exports = registerUser;