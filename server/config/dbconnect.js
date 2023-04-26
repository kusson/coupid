const mysql = require ("mysql2");
require ("dotenv").config({debug: true});


console.log("Creatin connection pool...")

const db = mysql.createConnection({
    host: process.env.MYSQL_SERVER_NAME,
    user: process.env.MYSQL_USERNAME,
    port: process.env.MYSQL_PORT,
    password: process.env.MYSQL_PW,
    database: process.env.MYSQL_DB,
})

module.exports = db;

// process.env.MYSQL_SERVER_NAME
// process.env.MYSQL_PORT
// process.env.MYSQL_USERNAME
// process.env.MYSQL_PW
// process.env.MYSQL_DB