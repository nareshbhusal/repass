const User = require('../../models/User');
const updateSessionIDs = require('../../controllers/user/updateSessionIDs');
const addCookie = require('../../controllers/user/addCookie');

const login = async(req, res) => {
    // const { username, password } = req.body;
    const { username, password } = req.query;

    const errors = [];
    if (!username || !password) {
        errors.push({ err: 'Please fill all fields' });
        return res.send(errors);
    }
    try {
        const user = await User.findOne({
            where: {
                username,
                password
            }
        });

        await updateSessionIDs(req, user);
        addCookie(req, user);
        return res.send(user);


    } catch(err) {
        console.log(err);
        return res.send(':(');
    }
    
}

module.exports = login;