
const postComment = require('../../controllers/Listing/postComment');
const postPost = require('../../controllers/Listing/postPost');

const isValid = (listing, type, postid) => {
    
    if (type === 'post') {
        if (!listing.title) {
            return false;
        }
    }
    if (type === 'comment') {
        console.log(postid);
        if (!listing.body || !postid){
            return false;
        }
    }
    return true;
}


const createListing = async (req, res, next) => {
    // validation
    const { type, sub, postid, commentid } = req.params;
    // const listing = req.body;

    if (!(type ==='comment' || type ==='post')) {
        return next();
    }
    let listing = req.query;
    const errors = [];

    if (!type || !sub) {
        errors.push({ err: 'Paramaters not satisified' });
    }

    if (!isValid(listing, type, postid)) {
        errors.push({ err: 'Please fill in all fields' });
        return res.send(errors);
    }
    
    try {
        const username = req.session.user.username;

        listing = {
            ...listing,
            sub,
            user: username,
            originalPost: postid,
            createdAt: new Date().getTime().toString()
        }
        if (commentid) {
            listing.parent = commentid;
        } else {
            listing.parent = postid;
        }
        if (type === 'post') {
            await postPost(listing);
        } else {
            await postComment(listing);
        }

        return res.send({ msg: 'Created listing!' });

    } catch(err) {
        console.log(err);
        return res.send('could not create listing');
    }
}

module.exports = createListing;