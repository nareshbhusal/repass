const User = require('../../models/User');
const Sub = require('../../models/Sub');
const updateSub = require('./updateSub');
const updateUser = require('../user/updateUser');

const addModerator = async (subName, username) => {
    try {
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
        } else {
            mods.splice(mods.indexOf(username), 1);
        }
        await updateSub(subName, { mods });

        const moderator = user.moderator || [];
        if (moderator.indexOf(subName) === -1) {
            moderator.push(subName);
        } else {
            moderator.splice(moderator.indexOf(subName), 1);
        }

        await updateUser(username, { moderator });
    } catch(err) {
        console.log(err);
    }
    
}

module.exports = addModerator;