const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('', async (req, res) => {
    console.log(req.session);
    if (req.session.user) {
        // if session exists
        return res.send('You\'re already logged in.')
    }
    try{
        // Check db for the user
        const user = await User.findOne({
            where: {
                username: req.body.username
            }
        });

        if (user) {
            console.log('In then \nuser found');
            // if user exists
            if (user.password !==req.body.password) {
                res.send('Password doesn\'t match');
            } else {
                // if password matches
                let session_ids = user.session_ids;
                session_ids = session_ids.split(',') || [];
                
                session_ids.push(req.sessionID);
                
                session_ids = session_ids.toString();
                console.log('\nsession_ids', session_ids);
                try{
                    user.update({
                        session_ids
                    })
                } catch(err) {
                    console.log(err);
                }
                // set a cookies with user's info
                req.session.user = {};
                req.session.user.username = user.username;
                req.session.sessionID = req.sessionID;
                // res.redirect('/');
                res.send(req.session);
            }
            
        } else {
            res.status(404).send('In `then`\nuser NOT found');
        }
    } catch(err) {
        console.log(err);
        res.status(500).send('something went wrong while loging in')
    }
});

module.exports = router;