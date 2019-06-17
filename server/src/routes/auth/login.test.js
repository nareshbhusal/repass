const User = require('../../models/User');
const app = require('../../index');
const request= require('supertest');

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
    await User.create(user1);
})

afterAll(async() => {
    await User.destroy({
        where: {},
        truncate: true
    })
})

test('Login as a user', async() => {
    await request(app).post('/login')
        .send({
            username: user1.username,
            password: user1.password
        })
        .expect(200);
})

test('Login with wrong password', async() => {
    await request(app).post('/login')
        .send({
            username: user1.username,
            password: 'efoioifrfrp'
        })
        .expect(400);
})