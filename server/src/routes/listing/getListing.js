const Listing = require('../../models/Listing');


const getListing = async (req, res) => {
    
    try {
        const { id } = req.params;
        const listing = await Listing.findOne({
            where: {
                id
            }
        });
        if (!listing) {
            return res.status(404).send({ err: 'Listing not found' });
        }
        // determine vote of the current user on the listing
        listing.dataValues.vote=null;
        if (req.session) {
            if (req.session.user) {
                const {username} = req.session.user;
                if (listing.ups) {
                    if (listing.ups.indexOf(username) !==-1) {
                        listing.dataValues.vote = 1;
                    }
                }
                if (listing.downs) {
                    if (listing.downs.indexOf(username) !==-1) {
                        listing.dataValues.vote = 0;
                    }
                }
            }
        }
        return res.status(200).send(listing);
    } catch(err) {
        console.log(err);
        return res.status(500).send({err: 'Listing not found'});
    }
}

module.exports = getListing;