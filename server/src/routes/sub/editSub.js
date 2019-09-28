const updateSub = require('../../controllers/sub/updateSub');
const Sub = require('../../models/Sub');

const editSub = async (req, res) => {
    const username = req.session.user.username;
    const sub = req.params.sub;
    const updatedSub = req.body;
    const authError = 'You are not authenticated to make changes to the sub!';

    try {
        const subInRecords = await Sub.findOne({
            where: {
                name: sub
            }
        });
        if (!subInRecords) {
            return res.status(400).send({err: 'Sub does not exist!'});
        }
        if (subInRecords.createdBy !== username) {
            return res.status(403).send({err: authError});
        }
        await updateSub(sub, { description: updatedSub.description });

        return res.status(200).send({msg: 'Edited sub'});
    } catch(err) {
        console.log(err);
        return res.status(500).send({err: 'Something went wrong. Server error'});
    }
}

module.exports = editSub;