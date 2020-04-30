// var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

// $.ajax({
//   url: queryURL,
//   method: "GET",
// }).then(function (response) {
//   //   console.log(response);
//   console.log(response.data[0]);
// });

$("#demo-butt").on("click", function () {
  console.log("you clicked demo button");
  var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

  $.ajax({
    url: queryURL,
    method: "GET",
    // headers: {
    //   "Access-Control-Allow-Credentials": true,
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Methods": "GET",
    //   "Access-Control-Allow-Headers": "application/json",
    // },
  }).then(function (response) {
    // response.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
    console.log(response);
    var imageurl = response.data[0].image_original_url;
    console.log(imageurl);

    var makePic = $("<img>");
    makePic.attr("src", imageurl);
    makePic.attr("alt", "sexy man");

    $("#demo-section").append(makePic);
  });
});

function runVanilla() {
  var xhr = $.get(
    "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaTOxFJmzC&limit=5"
  );

  xhr.done(function (data) {
    console.log("success got data", data);
  });
}

$("#test3").on("click", function () {
  let newDiv = $("<p></p>");
  newDiv.text("Hello world");
  $("#demo-2").append(newDiv);
});
