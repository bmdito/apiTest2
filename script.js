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
});

// function runVanilla(callback) {
//   console.log("clicked other demo");
//   var theUrL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

//   var xmlHttp = new XMLHttpRequest();
//   xmlHttp.onreadystatechange = function () {
//     if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//       callback(xmlHttp.responseText);
//   };
//   xmlHttp.open("GET", theUrl, true); // true for asynchronous
//   xmlHttp.send(null);
// }
