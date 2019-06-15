const User = require('../../models/User');
const updateSessionIDs = require('../../controllers/user/updateSessionIDs');
const addCookie = require('../../controllers/user/addCookie');

const registerUser = async(req, res) => {
    // const { username, email, password } = req.body;
    const { username, email, password } = req.query;
    // server side validation
    const errors = [];
    if (!username || !password || !email) {
        errors.push({ err: 'Please fill in all fields' });
        return res.send(errors);
    }
    try {
        // Check if the user already exists
        const userInRecords = await User.findOne({
            where: {
                username
            }
        });
        if (userInRecords) {
            errors.push({ err: 'Username taken!' })
            return res.send(errors);
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
        return res.send({msg: 'Registered user'});

    } catch(err) {
        console.log(err);
        return res.send(':(')
    }
    
}

module.exports = registerUser;