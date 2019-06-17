const Listing = require('../../models/Listing');

const getVote = async(listingId, username) => {
    const listing = await Listing.findOne({
        where: {
            id: listingId
        }
    });
    const downvotesList = listing.downs || [];
    const upvotesList = listing.ups || [];
    const inDownvotesList = downvotesList.indexOf(username) === -1;
    const inUpvotesList = upvotesList.indexOf(username) === -1;

    if (inDownvotesList) {
        return 0;
    } else if (inUpvotesList) {
        return 1;
    } else {
        return null;
    }
}

module.exports = getVote;