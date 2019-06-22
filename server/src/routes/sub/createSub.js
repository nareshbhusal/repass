const Sub = require('../../models/Sub');
const toggleModerator = require('../../controllers/sub/toggleModerator');

const createSub = async(req, res) => {
    try{
        const errors = [];
        let { name, description } = req.body;
        name=name.trim();
        description=description.trim();
        const username = req.session.user.username;

        const subInRecords = await Sub.findOne({
            where: {
                name
            }
        });
        if (subInRecords) {
            // sub already exists
            errors.push({ err: 'Sub already exists' });
            return res.status(409).send(errors);
        }
        const sub = {
            name,
            description,
            createdBy: username,
            mods: [],
            createdAt: new Date().getTime().toString()
        }
        sub.mods.push(username);
        await Sub.create(sub);

        await toggleModerator(sub.name, username);
        return res.send({ msg: 'Sub created' });

    } catch(err) {
        console.log(err);
        return res.send(':(');
    }
}

module.exports = createSub;