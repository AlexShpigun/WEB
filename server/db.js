const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'tvoysenpay',
    password: 'Ko30092001',
    port: 5432
})

module.exports = pool