const app = require('../../index');
const User = require('../../models/User');
const request = require('supertest');

const user1 = {
    username: 'test-register-1',
    password: 'reoiheroigh',
    email: 'test-register-1@gmail.com'
}

beforeAll(async() => {
    await User.destroy({
        where: {},
        truncate: true
    })
})

afterAll(async() => {
    await User.destroy({
        where: {},
        truncate: true
    })
})

test('Create a user', async () => {

    let res = await request(app)
        .post('/register')
        .send(user1);
    expect(res.status).toBe(200);

    const user = await User.findOne({
        where: {
            username: user1.username
        }
    });
    expect(user.username).toBe(user1.username);
})

test('Create a conflicting user', async() => {
    const res = await request(app)
        .post('/register')
        .send(user1);
    expect(res.status).toBe(409);
})