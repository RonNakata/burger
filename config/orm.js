// Import MySQL connection.
var connection = require("../config/connection.js");



// Object for all our SQL statement functions.
var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers;";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(name, cb) {

    var queryString = "INSERT INTO burgers (burger_name) VALUES ('" + name + "')";

    console.log("insertOne:" + queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function(id, cb) {

    var queryString = "UPDATE burgers SET devoured=true WHERE id=" + id + ";"

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};

// Export the orm object for the model (cat.js).
module.exports = orm;
