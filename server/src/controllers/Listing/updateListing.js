const Listing = require('../../models/Listing');

const updateListing = async(listingId, dataToUpdate) => {
    await Listing.update(
        { ...dataToUpdate },
        {
            where: {
                id: listingId
            }
        }
    )
}

module.exports = updateListing;