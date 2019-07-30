// plug-ins required
var express = require("express");
var app = express();
var exphbs = require("express-handlebars");
var routes = ?????;

// identifying port and alternate port
var PORT = process.env.PORT || 8080;

// using express to parse data at middleware point
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs({"/:" + "main"}));
app.set("engine", "handlebars");
 
// directing the server routes
// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);

// adding the listener for the server
app.listen(PORT, function(){
    console.log("Listening on PORT: ", PORT);
});