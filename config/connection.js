// * Inside the `connection.js` file, setup the code to connect Node to MySQL.

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "madeleinekemeny",
  password: "Jungyoon1",
  database: "burger"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection(){
//    * Export the connection.
}