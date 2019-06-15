const User = require('../../models/User');

const updateUser = async (username, dataToUpdate) => {
    console.log(dataToUpdate);
    await User.update(
        { ...dataToUpdate },
        {
            where: {
                username
            }
        }
    );
}

module.exports = updateUser;