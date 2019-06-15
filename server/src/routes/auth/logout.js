const User = require('../../models/User');
const clearSession = require('../../controllers/user/clearSession');

const logout = async(req, res) => {
    if (!req.session) {
        return res.send([{ err: 'Already logged out!' }]);
    }
    // Clear session_id from the database
    if (req.session.user) {
        try{
            const username = req.session.user.username;
            const user = await User.findOne({
                where: {
                    username
                }
            })
            if (user) {
                // if user exists
                await clearSession(req, user);
                
            } else {
                return res.send([{ err: 'Already logged out!' }]);
            }
        } catch(err) {
            res.status(500).send('something went wrong while trying to log out!')
        }
    } else {
        res.status(400).send([{ err: 'Already logged out!' }]);
    }
}

module.exports = logout;