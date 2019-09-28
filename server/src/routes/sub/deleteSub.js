const Sub = require('../../models/Sub');

const authError = { err: 'You\'re not authorized to delete this sub!' };
const notFoundError = { err: 'Sub does not exist' };

const deleteSub = async(req, res) => {
    try {
        const sub = req.params.sub;
        const username = req.session.user.username;
        const subInRecords = await Sub.findOne({
            where: {
                name: sub
            }
        });

        if (subInRecords.createdBy !== username) {
            console.log('not a mod')
            return res.status(403).send(authError);

        } else {
            console.log('deleting');
            await Sub.destroy({
                where: {
                    name: sub
                }
            });
            return res.status(200).send({ msg: 'Deleted sub!' });
        }
        
    } catch(err) {
        console.log(err);
        return res.status(500).send({err: 'Server error trying to delete sub'})
    }
}

module.exports = deleteSub;