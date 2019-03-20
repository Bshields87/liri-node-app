 require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');



var spotify = new Spotify({
    id: "015d9c94eeba42a6a6bdac8325c705f6",
    secret: "9d834df4038c4f798c530291f9c76d05"
  });
var query= process.argv[2];
spotify.search({ type: 'track', query: query }, function(err, data) {
 
    
    if (err) {
    return console.log('Error occurred: ' + err);
  }
  console.log(data.artist);
});