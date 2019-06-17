const User = require('../../models/User');
const Sub = require('../../models/Sub');
const updateUser = require('./updateUser');
const updateSub = require('../sub/updateSub');

// adds or removes user subscription from a sub

const toggleSub = async(username, sub) => {
    const user = await User.findOne({
        where: {
            username
        }
    })
    const userSubs = user.subs || [];
    let toAdd;
    if (userSubs.indexOf(sub) ===-1) {
        userSubs.push(sub);
        toAdd = true;
    } else {
        userSubs.splice(userSubs.indexOf(sub, 1));
        toAdd = false;
    }
    await updateUser(username, { subs: userSubs });

    const subInRecords = await Sub.findOne({
        where: {
            name: sub
        }
    });
    const users = subInRecords.users || [];
    if (toAdd) {
        users.push(username);
    } else {
        users.splice(users.indexOf(username), 1);
    }

    await updateSub(sub, { users });
}

module.exports = toggleSub;