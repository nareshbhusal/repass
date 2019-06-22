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
            return res.status(404).send({ err: 'Sub does not exist' });
        }
        const mods = subInRecords.mods || [];
        if (mods.indexOf(username) ===-1) {
            return res.status(403).send({ err: 'You\'re not authorized to delete this sub!' });
        }
        await Sub.destroy({
            where: {
                name: sub
            }
        });

        return res.status(200).send({ msg: 'Deleted sub!' });
    } catch(err) {
        console.log(err);
        return res.status(500).send('Server error trying to delete sub')
    }
}

module.exports = deleteSub;