const Sub = require('../../models/Sub');

const deleteSub = async(req, res) => {
    try {
        const sub = req.params.sub;
        const username = req.session.user.username;

        const subInRecords = await Sub.destroy({
            where: {
                name: sub
            }
        });
        if (!subInRecords) {
            return res.send([{ err: 'Sub does not exist' }]);
        }
        const mods = subInRecords.mods || [];
        if (mods.indexOf(username) ===-1) {
            return res.send([{ err: 'Not authorized to delete this sub!' }]);
        }
        await Sub.destroy({
            where: {
                name: sub
            }
        });

        return res.send({ msg: 'Deleted sub!' });
    } catch(err) {
        console.log(err);
        return res.send(':)')
    }
}

module.exports = deleteSub;