const mysql = require('mysql2');

const config = require('../config/config.json');

const pool = mysql.createPool({
  host: config.host,
  user: config.user,
  database: config.database,
  password: config.password,
});

pool.query(`select * from groceries`, (err, result, fields) => {
  if(err) {
    return console.log(err);
  }
  return console.log(result);
})

module.exports = pool.promise();
