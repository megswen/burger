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
        //console.log("Done");
        res.send();
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    var id = req.params.id;
    //console.log("BURGER ID " + id);
    burger.deleteBurger(id, function() {
        //console.log("BURGER DELETED");
        res.send();
    });
});











// router.get("/*", function(req, res) {
//     burger.selectAll(function(data) {
//         var hbsObject = {
//             burgers: data
//         };
//         console.log(hbsObject);
//         //res.render("index", hbsObject);
//     });
// });

// More routes down here

module.exports = router;
