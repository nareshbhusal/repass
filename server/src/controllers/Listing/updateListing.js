const Listing = require('../../models/Listing');
const User = require('../../models/User');
const updateUser = require('../user/updateUser');

const updateListing = async(listingId, dataToUpdate, changeInKarma) => {
    await Listing.update(
        { ...dataToUpdate },
        {
            where: {
                id: listingId
            }
        }
    );
    if (!changeInKarma) {
        return;
    }

    try {
        const listing = await Listing.findOne({
            where: {
                id: listingId
            }
        });
        const username = listing.user;
        const user = await User.findOne({
            where: {
                username
            }
        });
        const karma = user.karma || 0;
        const newKarma = karma + changeInKarma;

        await updateUser(username, { karma: newKarma });

    } catch(err) {
        console.log('couldn\'t change karma');
        console.log(err);
    }
}

module.exports = updateListing;