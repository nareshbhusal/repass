const toggleSub = require('./toggleSub');
const User = require('../../models/User');
const Sub = require('../../models/Sub');

const user1 = {
    username: 'toggleSub-test-user',
    password: 'efprfrpoj',
    email: 'toggleSub-test-user@gmail.com'
}

const user2 = {
    username: 'toggleSub-test-user-2',
    password: 'efprfrpoj',
    email: 'toggleSub-test-user-2@gmail.com'
}

const sub1 = {
    name: 'updateSub-test-sub',
    description: 'rgjrhgojrpogjrpgj',
}

beforeEach(async() => {
    await User.destroy({
        where: {},
        truncate: true
    });
    await Sub.destroy({
        where: {},
        truncate: true
    })
    await User.create(user1);
    await User.create(user2);
    await Sub.create(sub1);

})

test('Subscribe to a sub', async() => {
    await toggleSub(user1.username, sub1.name);
    const sub = await Sub.findOne({
        where: {
            name: sub1.name
        }
    });
    const user = await User.findOne({
        where: {
            username: user1.username
        }
    });

    expect(sub.users[0]).toBe(user.username);
    expect(user.subs[0]).toBe(sub.name);
})

test('Unsubscribe user from a sub', async () => {
    await toggleSub(user1.username, sub1.name);
    await Sub.findOne({
        where: {
            name: sub1.name
        }
    });
    await User.findOne({
        where: {
            username: user1.username
        }
    });

    await toggleSub(user1.username, sub1.name);
    const sub = await Sub.findOne({
        where: {
            name: sub1.name
        }
    });
    const user = await User.findOne({
        where: {
            username: user1.username
        }
    });

    expect(sub.users.length).toBe(0);
    expect(user.subs.length).toBe(0);
})

test('Subscribe 2 users to a sub', async() => {
    await toggleSub(user1.username, sub1.name);
    await Sub.findOne({
        where: {
            name: sub1.name
        }
    });
    const newuser1 = await User.findOne({
        where: {
            username: user1.username
        }
    });

    await toggleSub(user2.username, sub1.name);
    const sub = await Sub.findOne({
        where: {
            name: sub1.name
        }
    });
    const newuser2 = await User.findOne({
        where: {
            username: user2.username
        }
    });
    expect(sub.users.length).toBe(2);
    expect(newuser1.subs[0]).toBe(sub1.name);
    expect(newuser2.subs[0]).toBe(sub1.name);
})
