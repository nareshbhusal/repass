const User = require('../../models/User');
const Sub = require('../../models/Sub');
const toggleModerator = require('./toggleModerator');

const user1 = {
    username: 'toggleModerator-test-user',
    email: 'toggleModerator-test-user@gmail.com',
    password: 'rgpojrgpojrg'
}
const user2 = {
    username: 'toggleModerator-test-user-2',
    email: 'toggleModerator-test-user-2@gmail.com',
    password: 'rgpojewpfojrg'
}

const sub1 = {
    name: 'toggleModerator-test-sub',
    description: 'description toggleModerator-test-sub'
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

    await User.create(user1);
    await User.create(user2);
    await Sub.create(sub1);
})

test('Add user as a moderator', async() => {
    await toggleModerator(sub1.name, user1.username);
    const mod = await User.findOne({
        where: {
            username: user1.username
        }
    });
    const sub = await Sub.findOne({
        where: {
            name: sub1.name
        }
    })
    expect(sub.mods.length).toBe(1);
    expect(sub.mods[0]).toBe(mod.username);
    expect(mod.moderator.length).toBe(1);
    expect(mod.moderator[0]).toBe(sub.name);
})

test('Add 2 users as moderators', async() => {
    await toggleModerator(sub1.name, user1.username);
    await toggleModerator(sub1.name, user2.username);
    const mod1 = await User.findOne({
        where: {
            username: user1.username
        }
    });
    const mod2 = await User.findOne({
        where: {
            username: user2.username
        }
    });
    const sub = await Sub.findOne({
        where: {
            name: sub1.name
        }
    })
    expect(sub.mods.length).toBe(2);
    expect(sub.mods[0]).toBe(mod1.username);
    expect(mod1.moderator.length).toBe(1);
    expect(mod2.moderator.length).toBe(1);
})