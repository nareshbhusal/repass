
const postComment = require('../../controllers/Listing/postComment');
const postPost = require('../../controllers/Listing/postPost');

const isValid = (listing, type) => {
    
    if (type === 'post' && !listing.title) {
        return false;
    }
    if (type === 'comment' && !listing.body) {
        return false;
    }
    return true;
}


const createListing = async (req, res, next) => {

    const { sub, id } = req.params;

    let listing = req.body;
    // let listing = req.query;
    const errors = [];
    console.log(listing);
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
        return res.status(400).send(errors);
    }
    
    try {
        const username = req.session.user.username;

        listing = {
            ...listing,
            sub,
            user: username,
            originalPost: id,
            createdAt: new Date().getTime().toString(),
            ups: [username]
        }

        if (type === 'post') {
            await postPost(listing);
        } else {
            listing.parent = id;
            await postComment(listing);
        }

        return res.status(201).send({ msg: 'Created listing!' });

    } catch(err) {
        console.log(err);
        return res.status(500).send({err: 'Server error! could not create listing'});
    }
}

module.exports = createListing;