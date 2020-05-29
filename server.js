var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Give the server access to routes
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Listener
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
