const updateListing = require('../../controllers/Listing/updateListing');

const deleteListing = async (req, res) => {
    const username = req.session.user.username;
    const id = req.params.id;
    try {
        await updateListing(id, { deleted: true });
        return res.status(202).send({ msg: 'Deleted listing!' })
        
    } catch(err) {
        console.log(err);
        return res.status(500).send({ err: 'Server error while deleting listing!' });
    }
}

module.exports = deleteListing;