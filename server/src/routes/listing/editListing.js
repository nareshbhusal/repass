const Listing = require('../../models/Listing');
const updateListing = require('../../controllers/Listing/updateListing');

const editListing =async(req, res) => {
    try {
        // const updatedListing = req.body;
        const updatedListing = req.query;
        const listingId = req.params.id;
        await updateListing(listingId,  updatedListing);
        const listingInRecords = await Listing.findOne({
            where: {
                id: listingId
            }
        });
        if (!listingInRecords) {
            res.send([{err: 'Listing does not exist'}]);
        }
        return res.send({ msg: 'Listing updated' });


    } catch(err) {
        console.log(err);
        return res.send([{ err: 'Could not edit listing' }]);
    }
}

module.exports = editListing;