const db = require('../config/database');
const Sequelize = require('sequelize');

const listing = db.define('listing', {
    user: {
        type: Sequelize.STRING
    },
    body: {
        type: Sequelize.STRING
    },
    isLink: {
        type: Sequelize.BOOLEAN
    },
    title: {
        // title in null except for posts
        type: Sequelize.STRING
    },
    ups: {
        type: Sequelize.INTEGER
    },
    downs: {
        type: Sequelize.INTEGER
    },
    children: {
        // ids of sub-listings
        type: Sequelize.ARRAY
    },
    parent: {
        // id of parent listing
        type: Sequelize.STRING
    },
    isNSFW: {
        type: Sequelize.ARRAY
    },
    isSpoiler: {
        type: Sequelize.BOOLEAN
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.STRING
    }
})

module.exports = listing;

// listings can be posts, comments or replies