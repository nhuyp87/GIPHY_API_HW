// Array of strings related to a topic of interest. 

var topics = ["elephants", "pitbulls", "honey badgers"]; 

// For loop - Take the topics in the array and create buttons in HTML. 

for (var i=0; i<topics.length; i++) {

    var button = $("<button>").attr("class", "topicButtons"); 

    $("#addButtons").append(button);

    button.append(topics[i]); 

}

// When user clicks submit, grab value and push to array. 

$("#searchButton").on("click", function () {

    event.preventDefault(); 

    topics.push($("#formInput").val().trim()); 

    var button = $("<button>").attr("class", "topicButtons"); 

    $("#addButtons").append(button);

    button.append(topics[topics.length-1]); 


}); 



// When user clicks on a button, the page should grab 10 static, non-animated gifs from the GIPHY API and place them on the page. 

$(document).on("click", ".topicButtons", function() {
      // Grabbing and storing the data-animal property value from the button
      var animal = $(this).text();
      // Constructing a queryURL using the animal name
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10&rating=pg-13";
      // Performing an AJAX request with the queryURL
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        // After data comes back from the request
        .done(function(response) {
          console.log(queryURL);
          console.log(response);
          // storing the data from the AJAX request in the results variable
          var results = response.data;
          // Looping through each result item
          for (var i = 0; i < results.length; i++) {
            // Creating and storing a div tag
            var animalDiv = $("<div>");
            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);
            // Creating and storing an image tag
            var animalImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            animalImage.attr("src", results[i].images.fixed_height.url);
            // Appending the paragraph and image tag to the animalDiv
            animalDiv.append(p);
            animalDiv.append(animalImage);
            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            $("#addGif").prepend(animalDiv);
          }
        });
    });



// Display rating of each GIF under every GIF.



// When user clicks one of the still GIPHY images, the gif should animate.  If the user clicks the gif again, it should stop playing. 



// Add for to page that takes the value from a user input box and adds it into your topics array. 



// Function to call each topic in the array and remakes buttons on the page. 