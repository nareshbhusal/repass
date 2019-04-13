const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Log Out
router.post('', async (req,res) => {
    // Clear session_id from the database
    if (req.session.user) {
        try{
            const user = await User.findOne({
                where: {
                    username: req.session.username
                }
            });
            if (user) {
                let session_ids = user.session_ids;
                session_ids = session_ids.split(',').filter(session_id => {
                    return session_id !== req.sessionID
                }).toString();

                user.update({
                    session_ids
                })
                req.session.destroy((err) => {
                    if(err) {
                        return console.log(err);
                    }
                    res.redirect('/');
                });
            } else {
                console.log(err);
                throw "user not found server error"
            }
        } catch(err) {
            res.status(500).send('something went wrong while trying to log out!')
        }
    } else {
        res.status(400).send('You\'re aready logged out');
    }
});

module.exports = router;