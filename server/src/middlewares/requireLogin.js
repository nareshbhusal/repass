const User = require('../models/User');

const clearHeaderCache = (res) => {
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
}

const requireLogin = async (req, res, next) => {

    const authError = {err: 'Error authenticating. Please login!'}
    const sessionError = { err: 'Sessions not supported' };

    // Check if session exists
    if (!req.session) {
        return res.status(403).send([authError, sessionError]);
    }
    if (!req.session.user) {
        return res.status(403).send([authError])
    }

    // lookup the user in the DB by pulling their email from the session
    try{
        const username = req.session.user.username;
        const user = await User.findOne({
            where: {
                username
            }
        });

        // Check if the id and sessionID in session match the ones in DB
        if (user) {
            const isAuthorized = user.session_ids.split(',').some(session_id => {
                return session_id === req.sessionID
            });
            if (isAuthorized) {
                clearHeaderCache(res);
                return next();
            } else {
                // clear the browser session
                req.session.destroy((err) => {
                    if(err) {
                        console.log(err);
                    }
                });
            }
        }
        return res.status(403).send([authError])

    } catch(err) {
        console.log('error checking authroization status', err);
        return res.status(500).send(':(')
    }
}

module.exports = requireLogin;