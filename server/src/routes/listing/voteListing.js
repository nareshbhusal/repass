const vote = require('../../controllers/Listing/vote');

const voteListing = async (req, res) => {
    const username = req.session.user.username;
    const listingId = req.params.id;
    try {
        await vote(listingId, username);
        return res.send({ msg: 'Successfully voted!' });
    } catch(err) {
        console.log(err);
        return res.send('Could not vote');
    }
}

module.exports = voteListing;