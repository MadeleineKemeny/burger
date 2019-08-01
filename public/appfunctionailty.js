// adding to database, default boolean state is "false"/uneatenconose
console.log("javascript loaded")

$("#addburger").on("click", function (event) {
    event.preventDefault();
    var name = $("#burgerName").val().trim();
    if (name) {
        console.log("click")
        var addBurger = {
            name: name,
            devoured: 0
        };
        console.log(addBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: addBurger
        }).then(function () {
            console.log("New burger added!");
            location.reload();
        });
    }
});


// change boolean to "true"/devoured
$(".devourBurger").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    var devouredTrue = {
        devoured: 1
    };
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredTrue
    }).then(function () {
        console.log("Burger has been devoured!");
        location.reload();
    });
});

// change boolean to "false"/not devoured
$(".unBurger").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    var devouredFalse = {
        devoured: 0
    };
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredFalse
    }).then(function () {
        console.log("Burger has been devoured!");
        location.reload();
    });
});