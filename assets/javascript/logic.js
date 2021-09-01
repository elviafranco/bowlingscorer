// if user selects strike on swing 1, they should not be able to enter second input.

// JavaScript doesn't get run until the HTML document is finished loading.
$(document).ready(function(){
   
    $("select").change(function(event){
        event.preventDefault();
        // let selectedInput = $(this).children("option:selected").val();
        // console.log(`selected input is ${selectedInput}`);
        
        let score = "";
        //call API to calculate score
        $("option:selected").each(function (){
        score += this.value;
        })

        console.log(score);

    // jQuery AJAX method to make requests to server-side APIs.
    let queryURL = "https://bowlingscoring.azurewebsites.net/api/CalculateBowlingScore/" + score + "?code=IY8P0FLC7zyMfi7VWxRQBlcCoozjuz7a8y7ErrCXgdPA75yOxWhyng==";
    $.ajax({
         url: queryURL,
         method: "GET"
        }).then(function(response) {
                console.log(response);
                $("#scoreTotal").text(response.score + " pts");
                });
    });

});


