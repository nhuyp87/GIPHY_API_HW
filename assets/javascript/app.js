// Array of strings related to a topic of interest. 

var topics = ["elephants", "pitbulls", "honey badgers"]; 

// Take the topics in the array and create buttons in HTML. 

for (var i=0; i<topics.length; i++) {

var button = $("<button>").attr("class", "topicButtons"); 

$(".test").append(button);

button.append(topics[i]); 

}


// When user clicks on a button, the page should grab 10 static, non-animated gifs from the GIPHY API and place them on the page. 

$(".topicButtons").on("click", function() {

		var person = $(this).attr("data-person");
	    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
	        person + "&api_key=dc6zaTOxFJmzC&limit=10";

      	$.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(personImage);

            $("#gifs-appear-here").prepend(gifDiv);
          }
    });
 });



// Display rating of each GIF under every GIF.



// When user clicks one of the still GIPHY images, the gif should animate.  If the user clicks the gif again, it should stop playing. 



// Add for to page that takes the value from a user input box and adds it into your topics array. 



// Function to call each topic in the array and remakes buttons on the page. 