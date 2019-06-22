const vote = require('../../controllers/Listing/vote');

const voteListing = async (req, res, next) => {
    const username = req.session.user.username;
    const { id, type } = req.params;
    if (type !=='up' && type !=='down') {
        return next();
    }
    try {
        await vote(id, username, type);
        return res.status(200).send({ msg: 'Successfully voted!' });
    } catch(err) {
        console.log(err);
        return res.status(500).send({err: 'Could not vote'});
    }
}

module.exports = voteListing;