const Sub = require('../../models/Sub');
const updateSub = require('./updateSub');

const sub1 = {
    name: 'updateSub-test-sub',
    description: 'rgjrhgojrpogjrpgj',
}

beforeEach(async() => {
    await Sub.destroy({
        where: {},
        truncate: true
    })
    await Sub.create(sub1);
})

const updatedSub = {
    name: 'updateSub-test-sub-updated',
    description: 'pjrfoijrpofj'
}

test('Update sub', async() => {
    await updateSub(sub1.name, updatedSub);
    const res = await Sub.findOne({
        where: {
            name: updatedSub.name
        }
    });
    expect(res.name).toBe(updatedSub.name);
    expect(res.description).toBe(updatedSub.description);
})