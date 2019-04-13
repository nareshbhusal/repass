const db = require('../config/database');
const Sequelize = require('sequelize');

const user = db.define('user', {
    username: {
        type: Sequelize.STRING
    },
    listings: {
        type: Sequelize.INTEGER
    },
    subs: {
        type: Sequelize.JSON
    },
    email: {
        type: Sequelize.STRING
    },
    followersCount: {
        type: Sequelize.INTEGER
    },
    createdAt : {
        type: Sequelize.DATE
    },
    votes: {
        type: Sequelize.JSON
    }
})
module.exports = user;


// listings are associated with their ids
// subs can be subpasses(subreddits), posts or even users