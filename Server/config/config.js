const Pool = require('pg').Pool
const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'abc',
  password: '12345',
  port: 5432,
})

module.exports = pool;