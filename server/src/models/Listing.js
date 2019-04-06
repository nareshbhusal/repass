const db = require('../config/database');
const Sequelize = require('sequelize');

const listing = db.define('listing', {
    body: {
        type: Sequelize.STRING
    },
    isLink: {
        type: Sequelize.BOOLEAN
    },
    title: {
        // title in null except for posts
        type: Sequelize.String
    },
    children: {
        // ids of sub-listings
        type: Sequelize.ARRAY
    },
    parent: {
        // id of parent listing
        type: Sequelize.String
    }
})

module.exports = listing;

// listings can be posts, comments or replies