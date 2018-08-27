// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");
  
      var newEatenState = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatenState
      }).then(
        function() {
          console.log("changed devoured to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#submit").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      console.log("clicked:")
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#newBurger").val().trim(),

      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created a new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-cat").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  