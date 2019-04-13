const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/user', async (req, res) => {
    // Validate data
    const { username, email, password } = req.body || {};
    console.log(req.body);
    let errors = [];
    if (!username || !email || !password) {
        errors.push({msg: 'Please fill in all fields'});
    }
    if (errors.length) {
        return res.status(666).send(errors);
    }
    const user =  await User.findOne({
        where: {
            username: req.body.username,
            email: req.body.email
        }
    });
    console.log('user', user);

    if (user) {
        // if user does exist, throw error
        res.status(502).send('Email is aready in use or username taken!')
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
                // set a cookie
                req.session.user = {};
                req.session.user.email = newUser.email;
                req.session.user.id = newUser.id;
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