const Listing = require('../../models/Listing');

const isThisOP = async (listing) => {
    try {
        if (!listing.parent){
            // this is a post
            return;
        }
        const originalPost = await Listing.findOne({
            where: {
                id: listing.originalPost
            }
        });
        if (originalPost.user === listing.user) {
            return true;
        }
        return false;
    } catch(err) {
        console.log(err);
        return false;
    }
}

const getListing = async (req, res) => {
    
    try {
        let { id } = req.params;
        id= parseInt(id) || -999; //to avoid server error when id is not of type number
        let listing = await Listing.findOne({
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
        const isOP = await isThisOP(listing);

        listing.isThisOP = isOP;

        return res.status(200).send(listing);
    } catch(err) {
        console.log(err);
        return res.status(500).send({err: 'Server error while getting listing!'});
    }
}

module.exports = getListing;