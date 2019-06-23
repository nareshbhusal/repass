const db = require('../config/database');
const Sequelize = require('sequelize');

const sub = db.define('sub', {
    name: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    description: {
        type: Sequelize.STRING
    },
    users: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    },
    listings: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
    },
    mods: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    },
    createdBy: {
        type: Sequelize.STRING
    },
    createdAt : {
        type: Sequelize.STRING
    },
    rules: {
        type: Sequelize.JSON
    }
})

module.exports = sub;