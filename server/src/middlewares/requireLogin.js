const User = require('../models/User');

const clearHeaderCache = (res) => {
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
}

const requireLogin = async (req, res, next) => {

    // Check if session exists
    if (req.session.user) {
        // lookup the user in the DB by pulling their email from the session
        try{
            const user = await User.findOne({
                where: {
                    username: req.session.user.username
                }
            });
            // Check if the id and sessionID in session match the ones in DB
            if (user) {
                const isAuthorized = user.session_ids.split(',').some(session_id => {
                    return session_id === req.session.sessionID
                });
                if (isAuthorized) {
                    console.log('user is authorized')
                    clearHeaderCache(res);
                    next();
                } else {
                    // clear the browser session
                    req.session.destroy((err) => {
                        if(err) {
                            return console.log(err);
                        }
                        res.send('session should be destroyed');
                    });
                    throw 'Session data doesn\'t match'
                }
            } else {
                res.send({msg: 'authFailure'});
            }
        } catch(err) {
            console.log('error checking authroization status', err);
        }
    } else {
        // Not logged in. No session
        res.send('not logged in');
    }
}

module.exports = requireLogin;