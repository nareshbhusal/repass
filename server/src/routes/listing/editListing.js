const Listing = require('../../models/Listing');
const updateListing = require('../../controllers/Listing/updateListing');

const editListing =async(req, res) => {
    try {
        // const updatedListing = req.body;
        const updatedListing = req.query;
        updatedListing.updatedAt = new Date().getTime().toString();
        const listingId = req.params.id;
        const username = req.session.user.username;

        const listingInRecords = await Listing.findOne({
            where: {
                id: listingId,
                user: username
            }
        });
        if (!listingInRecords) {
            res.send([{err: 'Listing does not exist'}]);
        }
        await updateListing(listingId,  updatedListing);

        return res.send({ msg: 'Listing updated' });


    } catch(err) {
        console.log(err);
        return res.send([{ err: 'Could not edit listing' }]);
    }
}

module.exports = editListing;