// dependencies
var express = require("express");
var exphbs = require("express-handlebars")

//creating server; identifying port and alternate port
var app = express();
var PORT = process.env.PORT || 8080;

// using express to parse at middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// static path
app.use(express.static("public"));

// using handlebars to chain together files
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars")
 
// directing the server routes
require("./routes/api-routes.js")(app);

// adding the listener for the server
app.listen(PORT, function(){
    console.log("Listening on PORT: ", PORT);
});