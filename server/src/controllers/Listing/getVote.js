const Listing = require('../../models/Listing');

const getVote = async(listingId, username) => {
    const listing = await Listing.findOne({
        where: {
            id: listingId
        }
    });
    const downvotesList = listing.downs || [];
    const upvotesList = listing.ups || [];

    const votesData = {
        ups: upvotesList,
        downs: downvotesList,
        total: upvotesList.length - downvotesList.length
    }

    if (!username) {
        // if not logged in
        return votesData;
    }
    const inDownvotesList = downvotesList.indexOf(username) !== -1;
    const inUpvotesList = upvotesList.indexOf(username) !== -1;

    // self refers to
        // null for no votes
        // 0 for downvote &
        // 1 for upvote on the listing
    if (inDownvotesList) {
        return { self: 0, ...votesData };
    } else if (inUpvotesList) {
        return { self: 1, ...votesData };
    } else {
        return { self: null, ...votesData };;
    }
}

module.exports = getVote;