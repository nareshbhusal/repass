const db = require('../config/database');
const Sequelize = require('sequelize');

// listings are associated with their ids
// subs can be subpasses(subreddits), posts or even users

const user = db.define('user', {
    username: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    password: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    listings: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
    },
    karma: {
        type: Sequelize.INTEGER
    },
    subs: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    },
    email: {
        type: Sequelize.STRING
    },
    followers: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    },
    following: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    },
    saved: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
    },
    createdAt : {
        type: Sequelize.STRING
    },
    votes: {
        type: Sequelize.JSON
    },
    moderator: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    },
    session_ids: {
        type: Sequelize.STRING
    }
})

module.exports = user;
