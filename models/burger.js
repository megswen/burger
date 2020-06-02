var orm = require("../config/orm.js");

var burger = {
  // Selecting all records from burgers table
  selectAllBurgers: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // Adding a burger to the database
  addBurger: function(data, cb) {
    orm.insertOne("burgers", ["burger_name", "devoured"], [data.burger_name, data.devoured], function(res) {
      cb(res);
    });
  },
  // Devouring a burger
  devourBurger: function(id, cb) {
    orm.updateOne("burgers", {devoured: "true"}, "id = " + id, function(res){
      cb(res);
    });
  },
  // Deleting a burger
  deleteBurger: function(id, cb) {
    orm.deleteOne("burgers", "id = " + id, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
