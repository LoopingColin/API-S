const mysql = require('mysql2')

// pool of simultaneous connections; can connect at the exact same time
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sakila'
})

module.exports = pool