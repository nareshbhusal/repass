const express = require('express');
const router = express.Router();
const Sub = require('../models/Sub');

router.get('/:sub', async (req, res) => {
    // Sub.findAll({

    // })
    const posts = [
        {
            user: 'username',
            title: 'This is the title of the post',
            body: 'Hi reddit. I want you to know that you are ok i guess. This is just a demon post anyways, so feel free to post any porn links.',
            votes: 20,
            comments: 69,
            time: '1 hour ago',
            sub: 'whatever',
            id: 1,
            url: 'r/ask/postid/comments',
            isSaved: false,
            detailed: true,
            vote: null
        },
        {
            user: 'username',
            title: 'This is the title of the post',
            body: 'Hi reddit. I want you to know that you are ok i guess. This is just a demon post anyways, so feel free to post any porn links.',
            votes: 20,
            comments: 69,
            time: '1 hour ago',
            sub: 'whatever',
            id: 2,
            url: 'r/ask/postid/comments',
            isSaved: false,
            detailed: true,
            vote: null
        }
    ];
    const user = {
        username: req.session.user
    }
    const data = {user, posts}
    res.send(data);
})

// create post route
router.post('/:sub/create', (req, res) => {
    res.send('create your post');
})

router.post('/subs/create', (req, res) => {
    res.send('create a subreddit');
})

module.exports = router;