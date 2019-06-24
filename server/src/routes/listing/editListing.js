const Listing = require('../../models/Listing');
const updateListing = require('../../controllers/Listing/updateListing');

const editListing = async(req, res) => {
    try {
        const updatedListing = req.body;
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
            res.status(400).send({err: 'Listing does not exist'});
        }
        await updateListing(listingId, updatedListing);

        return res.status(201).send({ msg: 'Listing updated' });


    } catch(err) {
        console.log(err);
        return res.status(500).send({ err: 'Could not edit listing' });
    }
}

module.exports = editListing;