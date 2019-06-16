const updateSub = require('../../controllers/sub/updateSub');
const Sub = require('../../models/Sub');

const editSub = async (req, res) => {
    const username = req.user.username;
    const sub = req.params.sub;
    const updatedSub = req.query;
    // const updatedSub = req.body;

    try {
        const subInRecords = await Sub.findOne({
            where: {
                name: sub
            }
        });
        if (!subInRecords) {
            return res.send([{err: 'Sub does not exist!'}]);
        }
        const authError = 'You are not authenticated to make changes to the sub!';
        if (subInRecords.user === username) {
            return res.send([{err: authError}]);
        }

        const mods = subInRecords.mods || [];
        if (mods.indexOf(username) ===-1) {
            return res.send([{ err: authError }]);
        }

        await updateSub(sub, { updatedSub });
    } catch(err) {
        console.log(err);
        return res.send('Something went wrong');
    }
}

module.exports = editSub;