// dependencies
var mysql = require('mysql');

// declaring connection parameters
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "madeleinekemeny",
    password: "Jungyoon1",
    database: "burgers_db"
  });

// establishing connection to DB
connection.connect(function (error) {
    if (error) {
        console.error("Error connecting: ", error.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

// export connection method
module.exports = connection;