const updateListing = require('./updateListing');
const getVote = require('./getVote');

// Modify the state of vote on a listing for user

const vote = async(listingId, username, type) => {

    const votesData = await getVote(listingId, username);

    let vote = votesData.self;
    let downvotesList = votesData.downs || [];
    let upvotesList = votesData.ups || [];

    if (vote === 1 && type ==='up') {
        upvotesList.splice(upvotesList.indexOf(username), 1);

    } else if((vote === 0 || vote === null) && type==='up') {
        upvotesList.push(username);
        downvotesList.splice(downvotesList.indexOf(username), 1);

    } else if(vote === 0 && type === 'down') {
        downvotesList.splice(downvotesList.indexOf(username), 1);

    } else if ((vote === 1 || vote === null) && type ==='down') {
        upvotesList.splice(upvotesList.indexOf(username), 1);
        downvotesList.push(username);
    }
    await updateListing(listingId, { ups: upvotesList, downs: downvotesList });

}

module.exports = vote;