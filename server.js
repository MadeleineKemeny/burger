// plug-ins required
var express = require("express");
var app = express();

// identifying port and alternate port
var PORT = process.env.PORT || 8080;

// using express to parse data at middleware point
app.use(express.urlencoded({extended: true}));
app.use(express.json());
 
// directing the server routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// adding the listener for the server
app.listen(PORT, function(){
    console.log("Listening on PORT: ", PORT);
});