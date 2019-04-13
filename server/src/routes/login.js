const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('', async (req, res) => {
    
    console.log(req.body);
    if (req.session.user) {
        // if session exists
        return res.send('You\'re already logged in. <a href="/">Go Home</a>')
    }
    try{
        // Check db for the user
        const user = await User.findOne({
            where: {
                username: req.body.username,
                // password: req.body.password
            }
        });

        if (user) {
            console.log('In then \nuser found');
            // if user exists
            if (user.password !==req.body.password) {
                res.send('Password doesn\'t match');
            } else {
                // if password matches
                console.log('session_ids', user.session_ids);
                let session_ids = user.session_ids.split(',');
                
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
                req.session.user.email = user.email;
                req.session.user.id = user.id;
                req.session.sessionID = req.sessionID;
                req.session.user.username = user.username;
                // res.redirect('/');
            }
            
        } else {
            res.status(400).send('In `then`\nuser NOT found');
        }
    } catch(err) {
        console.log(err);
        res.status(500).send('something went wrong while loging in')
    }
});

module.exports = router;