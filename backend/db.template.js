var mysql = require('mysql');
var con = mysql.createConnection({
  host     : '',
  user     : '',
  password : '',
  database : ''
});
con.connect();
module.exports = con;