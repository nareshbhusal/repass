const vote = require('./vote');
const getVote = require('./getVote');
const User = require('../../models/User');
const Sub = require('../../models/Sub');
const Listing = require('../../models/Listing');

const user1 = {
    username: 'test-user-vote-1',
    password: 'fijrfj',
    email: 'test-user-vote-1@gmail.com'
}
const user2 = {
    username: 'test-user-vote-2',
    password: 'fijrfj',
    email: 'test-user-vote-2@gmail.com'
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
    await User.create(user2);
    await Sub.create(sub1);
    await Listing.create(post1);
})

test('Upvote listing', async() => {
    const listing = await Listing.findOne({
        where: {
            title: post1.title 
        }
    });

    let votesData = await getVote(listing.id);
    await vote(listing.id, user2.username, 'up');

    votesData = await getVote(listing.id);
    expect(votesData.total).toBe(1);
    await vote(listing.id, user1.username, 'up');

    votesData = await getVote(listing.id);
    expect (votesData.total).toBe(2);
})

test('Unvote listing', async() => {
    let listing = await Listing.findOne({
        where: {
            title: post1.title 
        }
    });

    let votesData = await getVote(listing.id);
    expect(votesData.total).toBe(0);
    await vote(listing.id, user1.username, 'up');
    listing = await Listing.findOne({
        where: {
            title: post1.title
        }
    });
    expect(listing.ups.length - listing.downs.length).toBe(1);
    await vote(listing.id, user1.username, 'up');

    listing = await Listing.findOne({
        where: {
            title: post1.title
        }
    });

    expect(listing.ups.length - listing.downs.length).toBe(0);
    votesData = await getVote(listing.id);
    expect (votesData.total).toBe(0);
})

test('Downvote listing', async() => {
    let listing = await Listing.findOne({
        where: {
            title: post1.title
        }
    });
    let votesData = await getVote(listing.id);
    expect(votesData.total).toBe(0);

    await vote(listing.id, user1.username, 'down');

    votesData = await getVote(listing.id);
    expect(votesData.total).toBe(-1);
})