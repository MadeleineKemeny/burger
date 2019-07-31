var orm = require("../config/orm");

var burger = {
  selectAll: function(callback){
    orm.selectAll("burgers", function(result){
      callback(result);
    });
  },
  insertOne: function(columns, values, callback) {
    orm.selectAll("burgers", columns, values, function(result) {
      callback(result);
    });
  },
  updateOne: function(objColVals, condition, callback) {
    orm.selectAll("burgers", objColVals, condition, function(result){
      callback(result);
    });
  }
};

module.exports = burger;