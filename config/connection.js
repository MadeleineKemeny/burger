// * Inside the `connection.js` file, setup the code to connect Node to MySQL.

var mysql = require("mysql")

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "madeleinekemeny",
  password: "Jungyoon1",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

// make connecttion... am i missing a line of code?

function afterConnection(){
//    * Export the connection.
module.exports = connection;
}