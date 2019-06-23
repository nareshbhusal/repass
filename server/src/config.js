require('dotenv').config();

module.exports = {
    session_secret: process.env.SESSION_SECRET_DEV,
    db_name: process.env.DB_NAME_DEV,
    db_user: process.env.DB_USER_DEV,
    db_pass: process.env.DB_PASS_DEV,
    host: process.env.HOST_DEV,
    port: process.env.PORT,
};