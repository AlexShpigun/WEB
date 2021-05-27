const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'tvoySempay',
    password: 'Ko30092001',
    port: 5432,
})

module.exports = pool