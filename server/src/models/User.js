const db = require('../config/database');
const Sequelize = require('sequelize');

const user = db.define('user', {
    name: {
        type: Sequelize.STRING
    },
    listings: {
        type: Sequelize.ARRAY
    },
    subs: {
        type: Sequelize.ARRAY
    },
    email: {
        type: Sequelize.STRING
    },
    followersCount: {
        type: Sequelize.INTEGER
    },
    createdAt : {
        type: Sequelize.Date
    },
    updatedAt: {
        type: Sequelize.Date
    }
})
module.exports = user;


// listings are associated with their ids
// subs can be subpasses(subreddits), posts or even users