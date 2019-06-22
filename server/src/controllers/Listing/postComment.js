const User = require('../../models/User');
const updateUser = require('../user/updateUser');
const Listing = require('../../models/Listing');
const updateListing = require('./updateListing');

// post a listing as a post on a sub
// save the post id on the Sub, User, Listings, 
// and parent listing's children column(array)

const postComment = async(comment) => {
    const username = comment.user;
    const parent = comment.parent;
    const newListing = await Listing.create(comment);
    const newListingId = newListing.id;
    const userInRecords = await User.findOne({
        where: {
            username
        }
    });
    const userListings = userInRecords.listings || [];
    userListings.unshift(newListingId);

    // update user's listings
    await updateUser(
        { listings: userListings },
        {
            where: {
                username
            }
        }
    );
    // update parent listing's children
    const listing = await Listing.findOne({
        where: {
            id: parent
        }
    });

    const children = listing.children || [];
    children.unshift(newListingId);
    await updateListing(parent, { children });

}

module.exports = postComment;