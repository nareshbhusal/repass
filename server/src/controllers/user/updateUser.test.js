const User = require('../../models/User');
const updateUser = require('./updateUser');

const user1 = {
    username: 'updateUser-test-user',
    password: 'rgjrhgojrpogjrpgj',
    email: 'updateUser-test-user@gmail.com'
}

beforeEach(async() => {
    await User.destroy({
        where: {},
        truncate: true
    })
    await User.create(user1);
})

const updatedUser = {
    ...user1,
    username: 'updateUser-test-user-updated'
}

test('Update user', async() => {
    await updateUser(user1.username, updatedUser);
    const res = await User.findOne({
        where: {
            email: user1.email
        }
    });
    expect(res.username).toBe(updatedUser.username);
})