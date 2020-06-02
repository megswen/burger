var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Create the router for the app, and export the router at the end of your file.
router.get("/", function(req, res) {
    burger.selectAllBurgers(function(data) {
        res.render("index", {burgers: data});
    });
});

router.post("/api/burgers", function(req, res) {
    burger.addBurger(req.body, function() {
        res.send();
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var id = req.params.id;
    burger.devourBurger(id, function() {
        res.send();
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    var id = req.params.id;
    burger.deleteBurger(id, function() {
        res.send();
    });
});

module.exports = router;
