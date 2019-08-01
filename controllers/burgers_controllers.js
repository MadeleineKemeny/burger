// dependencies
var express = require("express");
var burger = require("../models/burger")
var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
})

router.post("/api/burgers", function (req, res) {
    console.group("post")
    burger.insertOne(
        ["burger_name", "devoured"],
        [req.body.name, req.body.devoured],
        function (result) {
            console.log(result)
            res.json({ id: result.insertId });
        }
    );
});

router.put("/api/burgers/:id", function (request, response) {
    var condition = "id = " + request.params.id;
    console.log("condition", condition);
    burger.updateOne({ devoured: request.body.devoured }, condition, function (result) {
        if ((result.changedRows === 0)) {
            return response.status(404).end();
        }
        else {
            response.status(200).end();
        }
    });
});


module.exports = router;