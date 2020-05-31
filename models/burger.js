var orm = require("../config/orm.js");

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
  // Selecting all records from burgers table
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  }

  // orm.insertOne();

  // orm.updateOne();
};

// Export at the end of the burger.js file.
module.exports = burger;