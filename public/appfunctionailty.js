// adding to database, default boolean state is "false"/uneaten
$(function(){
    $(".burgerForm").on("submit", function(event){
        event.preventDefault();

        var addBurger = {
            name: $("burgerName").val.trim,
            devoured: 0
        };
        console.log(addBurger);

        $.ajax("/api/burgers",{
            type: "POST",
            data: addBurger
        }).then(function(){
            console.log("New burger added!");
            location.reload();
        });
    });
});

// change boolean to "true"/devoured
$(".devourBurger").on("click",function(event){
    event.preventDefault();

    var id = $(this).data("id");
    var devouredTrue = {
        devoured: 1
    };
    $.ajax("/api/burgers" + id, {
        type: "PUT",
        data: devouredTrue
    }).then(function(){
        console.log("Burger has been devoured!");
        location.reload();
    });
});