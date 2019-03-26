

require('dotenv').config();
var Spotify = require('node-spotify-api');
let keys = require('./keys.js');


var action = process.argv[2];

if (action === "spotify-this-song"){
  var spotify = new Spotify(keys.spotify);
console.log(spotify);
  var song = process.argv.slice(3).join("+");
  console.log(song);
  spotify.search({ type: 'track', query: song }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
  
  console.log(data); 
  });
  



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
          "Date: " + moment(jsonData[i].datetime).format("MM/DD/YYYY, h:mm:ss a")
        ];
        fs.appendFile("log.txt", concertSchedule + divider, function(err) {
          if (err) throw err;
        }) 
        
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
        "Actors: " + jsonData.Actors];
        fs.appendFile("log.txt", movieInfo + divider, function(err) {
          if (err) throw err;
        }) 
      console.log(movieInfo);
    });
}
}

/*fs.readFile("random.txt", "utf8", function (error, data) {
  if (error) {
    return console.log(error);
  }
  console.log(data);
  var dataArr = data.split(",");
  console.log(dataArr);
});*/