// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var sushi = {
  selectAll: function(cb) {
    orm.selectAll("sushi", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("sushi", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("sushi", objColVals, condition, function(res) {
      cb(res);
    });
  }
};


// console.log($("#sushi_name").text);

// Export the database functions for the controller (catsController.js).
module.exports = sushi;
