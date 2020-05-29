var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Create the router for the app, and export the router at the end of your file.
// router.get("/", function(req, res) {
//     res.redirect("/burgers");
// });

// router.get("/", function(req, res) {
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
