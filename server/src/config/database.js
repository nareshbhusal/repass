const Sequelize = require('sequelize');
const { db_name, db_user, db_pass, host } = require('../config');

module.exports = new Sequelize('repassdb', 'postgres', 'nnnsss', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max:5,
        min: 0,
        acquire: 30000,
        idle: 1000
    },
    define : {
        timestamps: false
    },
    logging: false
})