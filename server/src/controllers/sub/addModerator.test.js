const User = require('../../models/User');
const Sub = require('../../models/Sub');
const addModerator = require('./addModerator');

const user1 = {
    username: 'addModerator-test-user',
    email: 'addModerator-test-user@gmail.com',
    password: 'rgpojrgpojrg'
}
const user2 = {
    username: 'addModerator-test-user-2',
    email: 'addModerator-test-user-2@gmail.com',
    password: 'rgpojewpfojrg'
}

const sub1 = {
    name: 'addModerator-test-sub',
    description: 'description addModerator-test-sub'
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
    await addModerator(sub1.name, user1.username);
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
    await addModerator(sub1.name, user1.username);
    await addModerator(sub1.name, user2.username);
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