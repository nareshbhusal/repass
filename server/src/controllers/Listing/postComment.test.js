const postComment = require('./postComment');
const Sub = require('../../models/Sub');
const User = require('../../models/User');
const Listing = require('../../models/Listing');


const user1 = {
    username: 'updateUser-test-user',
    password: 'rgjrhgojrpogjrpgj',
    email: 'updateUser-test-user@gmail.com'
}
const sub1 = {
    name: 'test-sub-postComment'
}

const post1 = {
    title: 'test-post',
    body: 'test-post body',
    user: user1.username,
    sub: sub1.name
}

const comment1 = {
    body: 'body of test comment',
    user: user1.username
}

beforeEach(async() => {
    await User.destroy({
        where: {},
        truncate: true
    });
    await Sub.destroy({
        where: {},
        truncate: true
    });
    await Listing.destroy({
        where: {},
        truncate: true
    });

    await User.create(user1);
    await Sub.create(sub1);
    const listing = await Listing.create(post1);
    comment1.parent = listing.id;
})

test('Post comment on a post', async() => {
    await postComment(comment1);
    const comment = await Listing.findOne({
        where: {
            body: comment1.body
        }
    })
    const post = await Listing.findOne({
        where: {
            title: post1.title
        }
    });
    expect(comment.body).toBe(comment.body);
    expect(post.children[0]).toBe(comment.id);
})