const updateListing = require('./updateListing');
const getVote = require('./getVote');

// Modify the state of vote on a listing for user

const vote = async(listingId, username, type) => {

    const votesData = await getVote(listingId, username);

    let vote = votesData.self;
    let downvotesList = votesData.downs || [];
    let upvotesList = votesData.ups || [];

    let changeInKarma=0;

    if (vote === 1 && type ==='up') {
        
        changeInKarma = -1;
        upvotesList.splice(upvotesList.indexOf(username), 1);

    } else if((vote === 0 || vote === null) && type==='up') {

        if (vote === null) {
            changeInKarma = 1;
        } else {
            changeInKarma = 2;
        }

        upvotesList.push(username);
        downvotesList.splice(downvotesList.indexOf(username), 1);

    } else if(vote === 0 && type === 'down') {

        changeInKarma= 1;
        downvotesList.splice(downvotesList.indexOf(username), 1);

    } else if ((vote === 1 || vote === null) && type ==='down') {

        if (vote === null) {
            changeInKarma = -1;
        } else {
            changeInKarma = -2;
        }

        upvotesList.splice(upvotesList.indexOf(username), 1);
        downvotesList.push(username);
    }

    console.log(changeInKarma)
    await updateListing(listingId, { ups: upvotesList, downs: downvotesList }, changeInKarma);
}


module.exports = vote;