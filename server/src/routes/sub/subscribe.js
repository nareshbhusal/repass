const toggleSub = require('../../controllers/user/toggleSub');

const subscribe = async (req, res) => {
    const username = req.session.user.username;
    const sub = req.params.sub.toString();
    try {
        await toggleSub(username, sub);
        return res.status(200).send({ msg: 'Suscribed to '+sub });
    } catch(err) {
        console.log(err);
        return res.status(500).send('Something went wrong');
    }
}

module.exports = subscribe;