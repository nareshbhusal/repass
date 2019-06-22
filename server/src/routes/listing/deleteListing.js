const Listing = require('../../models/Listing');

const deleteListing = async (req, res) => {

    const username = req.session.user.username;
    const id = req.params.id;
    try {
        await Listing.destroy({
            where: {
                user:username,
                id
            }
        });
        return res.status(202).send({ msg: 'Deleted listing!' })
        
    } catch(err) {
        console.log(err);
        return res.status(500).send({ err: 'Server error while deleting listing!' });
    }
}

module.exports = deleteListing;