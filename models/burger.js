var orm = require("../config/orm.js");

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
  // Selecting all records from burgers table
  selectAllBurgers: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  addBurger: function(data, cb) {
    orm.insertOne("burgers", ["burger_name", "devoured"], [data.burger_name, data.devoured], function(res) {
      cb(res);
    });
  },
  devourBurger: function(id, cb) {
    orm.updateOne("burgers", {devoured: "true"}, "id = " + id, function(res){
      //console.log("RES: ", res);
      cb(res);
    });
  },
  deleteBurger: function(id, cb) {
    orm.deleteOne("burgers", "id = " + id, function(res) {
      //console.log("RESULT: " + res);
      cb(res);
    });
  }
};

// Export at the end of the burger.js file.
module.exports = burger;