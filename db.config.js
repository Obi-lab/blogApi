const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'db4free.net',
  user     : 'oballa',
  password : 'wu8u*eN.evce7bH',
  database : 'postsdb'
});

dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = dbConn;