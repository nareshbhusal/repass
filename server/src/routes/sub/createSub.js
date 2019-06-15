const Sub = require('../../models/Sub');
const User = require('../../models/User');
const updateUser = require('../../controllers/user/updateUser');
const addModerator = require('../../controllers/sub/addModerator');
const createSub = async(req, res) => {
    try{
        const errors = [];
        const name = req.params.sub;
        const username = req.session.user.username;

        const subInRecords = await Sub.findOne({
            where: {
                name
            }
        });
        if (subInRecords) {
            // sub already exists
            // errors.push({ err: 'Sub already exists' });
            // return res.send(errors);
        }
        const sub = {
            name,
            createdBy: username,
            mods: [ username ],
            createdAt: new Date().getTime().toString()
        }
        // await Sub.create(sub);

        await addModerator(sub.name, username);
        return res.send({ msg: 'Sub created' });

    } catch(err) {
        console.log(err);
        return res.send(':(');
    }
}

module.exports = createSub;