const updateListing = require('./updateListing');
const Listing = require('../../models/Listing');
const getVote = require('./getVote');

// Modify the state of vote on a listing for user

const vote = async(listingId, username) => {

    const listing = await Listing.findOne({
        where: {
            id: listingId
        }
    });
    let downvotesList = listing.downs || [];
    let upvotesList = listing.ups || [];

    const vote = await getVote(listingId, username);

    if (vote === 1) {
        // upvoted state
        upvotesList.splice(downvotesList.indexOf(username));
        downvotesList.push(username);

    } else if(vote === 0) {
        // downvoted state
        downvotesList.splice(downvotesList.indexOf(username));
        upvotesList.push(username);

    }else {
        // no vote state
        upvotesList.push(username);
    }
    await updateListing(listingId, { upvotesList, downvotesList });

}

module.exports = vote;