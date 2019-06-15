const User = require('../../models/User');
const updateUser = require('../user/updateUser');
const Listing = require('../../models/Listing');

const postComment = async(comment) => {
    const username = comment.user;
    const listingId = await Listing.create(comment);
    const userInRecords = await User.findOne({
        where: {
            username
        }
    });
    const userListings = userInRecords.listings || [];
    userListings.push(listingId);
    await updateUser(
        { listings: userListings },
        {
            where: {
                username
            }
        }
    );
}

module.exports = postComment;