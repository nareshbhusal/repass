const User = require('../../models/User');
const Sub = require('../../models/Sub');
const updateSub = require('./updateSub');
const updateUser = require('../user/updateUser');

const addModerator = async (subName, username) => {
    const user = await User.findOne({
        where: {
            username
        }
    });
    const subInRecords = await Sub.findOne({
        where: { 
            name: subName
        }
    });
    const mods = subInRecords.mods || [];
    if (mods.indexOf(username) === -1) {
        mods.push(username);
    }
    await updateSub(subName, { mods });
    const moderator = user.moderator || [];
    moderator.push(subName);
    await updateUser(username, { moderator });
}

module.exports = addModerator;