const Sequelize = require('sequelize');
const { DB_NAME, DB_USER, DB_PASS, HOST } = process.env;

console.log(DB_NAME, DB_PASS, DB_USER)
module.exports = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: HOST,
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