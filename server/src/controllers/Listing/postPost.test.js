const postPost = require('./postPost');
const Sub = require('../../models/Sub');
const Listing = require('../../models/Listing');
const User = require('../../models/User');

const user1 = {
    username: 'test-user-posPost',
    password: 'riofhroigh',
    email : 'test-user-posPost@gmail.com'
}

const sub1 = {
    name: 'test-sub-postPost',
    user: user1.username
}

const post1 = {
    title: 'title of test post',
    body: 'test post body',
    user: user1.username,
    sub: sub1.name
}

beforeEach(async() => {
    await Sub.destroy({
        where: {},
        truncate: true
    });
    await Listing.destroy({
        where: {},
        truncate: true
    });
    await User.destroy({
        where: {},
        truncate: true
    });
    await Sub.create(sub1);
    await User.create(user1);
})

test('Post a listing on a sub', async() => {
    await postPost(post1);
    const user = await User.findOne({
        where: {
            username: user1.username
        }
    });
    const post = await Listing.findOne({
        where: {
            title: post1.title
        }
    });
    const sub = await Sub.findOne({
        where: {
            name: sub1.name
        }
    });
    const listings = await Listing.findAll();

    expect(user.listings[0]).toBe(post.id);
    expect(sub.listings[0]).toBe(post.id);
    expect(listings.length).toBe(1);

})