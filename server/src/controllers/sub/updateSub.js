const Sub = require('../../models/Sub')

const updateSub = async (sub, dataToUpdate) => {
    await Sub.update(
        { ...dataToUpdate },
        {
            where: {
            name: sub
        }
    }
    );
}

module.exports = updateSub;