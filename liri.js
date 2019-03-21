require("dotenv").config();
let keys = require('./keys.js');
//var spotify = new Spotify(keys.spotify);
let fs = require("fs");
let moment = require("moment");
var axios = require("axios");


var divider = "\n------------------------------------------------------------\n\n";

var action = process.argv[2];

if (action === "concert-this") {
  var artist = process.argv.slice(3).join("");
  axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
    function (response) {
      let jsonData = response.data;

      for (i = 0; i < jsonData.length; i++) {
        let concertSchedule = [
          "Artist: " + jsonData[i].lineup[0],
          "Venue: " + jsonData[i].venue.name,
          "Location: " + jsonData[i].venue.country + jsonData[i].venue.city,
          "Date: " + moment(jsonData[i].datetime).format("MM/DD/YYYY, h:mm:ss a"),
          divider
        ]
        console.log(concertSchedule);
      }
    });
}

else if (action === "movie-this") {
  var movieTitle = process.argv.slice(3).join("");

  if (movieTitle === "") {
    movieTitle = "Mr.Nobody";
  }
  axios.get("http://www.omdbapi.com/?t=" + movieTitle + "&y=&apikey=trilogy").then(
    function (response) {

      let jsonData = response.data;

      let movieInfo = [
        "Title: " + jsonData.Title,
        "Release Year: " + jsonData.Year,
        "IMDB Rating: " + jsonData.imdbRating,
        "Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value,
        "Country of Production: " + jsonData.Country,
        "Language: " + jsonData.Language,
        "Plot: " + jsonData.Plot,
        "Actors: " + jsonData.Actors]
      console.log(movieInfo);
    });
}


fs.readFile("random.txt", "utf8", function (error, data) {
  if (error) {
    return console.log(error);
  }
  console.log(data);
  var dataArr = data.split(",");
  console.log(dataArr);
});