var connection = require("./connection");

// generating "?" to help create query
function printQuestionMarks(number) {
  var array = [];
  for (let index = 0; index < number; index++) {
    array.push("?");
  }
  return array.toString();
}

// translating query into SQL syntax
function objToSql(object) {
  var array = [];
  for (var key in object) {
    var value = object[key];
    if (Object.hasOwnProperty.call(object, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      array.push(key + "=" + value);
    }
  }
  return array.toString();
}

var orm = {
  selectAll: function(tableInput, callback) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    console.log(queryString)
    connection.query(queryString, function(error, result) {
      if (error) throw error;
      callback(result);
    });
  },
  insertOne: function(table, columns, values, callback) {
    var queryString =
      "INSERT INTO " +
      table +
      "(" +
      columns.toString() +
      ") " +
      "VALUES (" +
      printQuestionMarks(values.length) +
      ") ";

    console.log(queryString);
    connection.query(queryString, values, function(error, result) {
      if (error) throw error;
      callback(result);
    });
  },
  updateOne: function(table, objColVals, condition, callback) {
    var queryString =
      "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + condition;
    var values = [];
    console.log(queryString);
    connection.query(queryString, values, function(error, result) {
      if (error) throw error;
      callback(result);
    });
  }
};

module.exports = orm;