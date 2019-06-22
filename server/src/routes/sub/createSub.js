const Sub = require('../../models/Sub');
const toggleModerator = require('../../controllers/sub/toggleModerator');

const createSub = async(req, res) => {
    try{
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
            const error = { err: 'Sub already exists' };
            return res.status(409).send(error);
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
        return res.status(201).send({ msg: 'Sub created' });

    } catch(err) {
        console.log(err);
        return res.status(500).send(':(');
    }
}

module.exports = createSub;