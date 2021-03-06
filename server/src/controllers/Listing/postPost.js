const User = require('../../models/User');
const updateUser = require('../user/updateUser');
const updateSub = require('../sub/updateSub');
const Listing = require('../../models/Listing');
const Sub = require('../../models/Sub');

// post a listing as a post on a sub
// save the post id on the Sub, User, and Listings

const postPost = async (listing) => {
    const newListing = await Listing.create(listing);
        
    const listingId = newListing.id;
    const username = listing.user;
    const sub = listing.sub;

    const user = await User.findOne({ 
        where: {
            username
        }
    });
    const userListings = user.listings || [];
    userListings.unshift(listingId);

    await updateUser(username, {
        listings: userListings
    });

    const subInRecords = await Sub.findOne({
        where: {
            name: sub
        }
    });
    if (!subInRecords){
        throw new Error(`r/${sub} doesn't exist`);
    }
    const subListings = subInRecords.listings || [];
    subListings.unshift(listingId);

    await updateSub(sub, {
        listings: subListings
    });
}

module.exports = postPost;