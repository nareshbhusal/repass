const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/user', async (req, res) => {
    // Validate data
    const { username, email, password } = req.body || {};
    let errors = [];
    if (!username || !email || !password) {
        errors.push({err: 'Please fill in all fields'});
    }
    if (errors.length) {
        return res.send(errors);
    }
    const user =  await User.findOne({
        where: {
            username: req.body.username,
        }
    });

    if (user) {
        // if user does already exist, throw error
        errors.push({ err: 'Email is aready in use or username taken!' })
        res.send(errors);
    } else {
        // if new email and username then register along with session id
        const { username, email, password } = req.body;
        const session_ids = req.sessionID.toString();
        try{
            const newUser = await User.create({
                username,
                email,
                password,
                session_ids
            });
            if (newUser) {
                // Successful registeration
                console.log('registered user succesfully!')
                console.log(newUser);
                // set a cookie
                req.session.user = {};
                req.session.user.username = newUser.username;
                req.session.sessionID = req.sessionID;
                // res.status(201).redirect('/');
                res.send(req.session);
            } else {
                throw "Registeration failed at creation phase :/"
            }
        } catch(err) {
            console.log(err);
            res.status(500).send('something went wrong while registering')
        }
    }
})

router.get('/sub', (req, res) => {
    res.send('create a sub');
})

module.exports = router;