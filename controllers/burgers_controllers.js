// dependencies
var express = require("express");
var burger = require("../models/burger")
var router = express.Router();

router.get("/", function(req,res){
    burger.selectAll(function(data){
        varhbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });

    router.post("/api/burgers", function(req,res){
        burger.insertOne(
            ["burger_name", "devoured"],
            [request.body.burger_name, request.body.devoured],
            function(result) {
                Response.json({ id: result.insertId });
            }
        );
    });
    router.put("/api/burgers/:id", function(req,res){
        var condition = "id = " + request.param.id;
        console.log("condition", condition);
        burger.updateOne({ devoured: request.body.devoured }, condition, function(result){
            if ((result, changedRows === 0)) {
                return response.status(404).end();
            }
            else {response.status(200).end();
            }
        });
    });
});

module.exports = router;