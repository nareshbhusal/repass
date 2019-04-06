const db = require('../config/database');
const Sequelize = require('sequelize');

const sub = db.define('sub', {
    name: {
        type: Sequelize.STRING
    },
    users: {
        type: Sequelize.ARRAY
    },
    mods: {
        type: Sequelize.ARRAY
    },
    createdBy: {
        type: Sequelize.STRING
    },
    createdAt : {
        type: Sequelize.DATE
    },
    rules: {
        type: Sequelize.JSON
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.STRING
    }
})