$(function() {
    // Click event for adding burger
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        // Grab burger name from form field and set devoured state to false
        var newBurger = {
            burger_name: $("#burger-input").val().trim(),
            devoured: 0
        };
        console.log(newBurger);

        // Send the POST request using ajax
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
            }).then(
            function() {
                console.log("Created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // Click event to throw away/delete burger.
    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");
        console.log("DELETED");
    
        // Send the DELETE request using ajax.
        $.ajax("/api/burgers/" + id, {
          type: "DELETE",
        }).then(
          function() {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
    });

    //Click event for "Devour me" button.
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");
    
        var newDevourState = {
            devoured: "true"
        };
        console.log("DEVOURED");
    
        // Send the PUT request using ajax.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log("Changed devour to", newDevour);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });   

});