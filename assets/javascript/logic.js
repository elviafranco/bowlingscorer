// JavaScript wont run until the HTML document is finished loading.
$(document).ready(function () {
  $("select").change(function (event) {
    event.preventDefault();
    let selectedInput = $(this).children("option:selected").val();
    console.log(`selected input is ${selectedInput}`);
    let score = "";
    //API call to calculate score.
    $("option:selected").each(function () {
      score += this.value;
    });
    console.log(score);
    // jQuery AJAX method to make requests to server-side API.
    let queryURL =
      "https://bowlingscoring.azurewebsites.net/api/CalculateBowlingScore/" +
      score +
      "?code=IY8P0FLC7zyMfi7VWxRQBlcCoozjuz7a8y7ErrCXgdPA75yOxWhyng==";
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      $("#scoreTotal").text(response.score + " pts");
    });
  });
  // Clear selects & score
  $("#clear").on("click", function () {
    $("select").val("");
    $("#scoreTotal").empty();
  });
});
