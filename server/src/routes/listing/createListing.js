
const postComment = require('../../controllers/Listing/postComment');
const postPost = require('../../controllers/Listing/postPost');

const isValid = (listing, type) => {
    
    if (type === 'post') {
        if (!listing.title) {
            return false;
        }
    }
    if (type === 'comment') {
        if (!listing.body){
            return false;
        }
    }
    return true;
}


const createListing = async (req, res, next) => {

    const { sub, id } = req.params;

    const listing = req.body;
    // let listing = req.query;
    const errors = [];

    // validation
    if (!sub) {
        errors.push({ err: 'Paramaters not satisified' });
    }
    //establish type of listing -- post or comment
    let type;
    if (id) {
        type = 'comment';
    } else {
        type = 'post';
    }

    if (!isValid(listing, type)) {
        errors.push({ err: 'Please fill in all fields' });
        return res.send(errors);
    }
    
    try {
        const username = req.session.user.username;

        listing = {
            ...listing,
            sub,
            user: username,
            originalPost: id,
            createdAt: new Date().getTime().toString()
        }

        if (type === 'post') {
            await postPost(listing);
        } else {
            listing.parent = id;
            await postComment(listing);
        }

        return res.send({ msg: 'Created listing!' });

    } catch(err) {
        console.log(err);
        return res.send('could not create listing');
    }
}

module.exports = createListing;