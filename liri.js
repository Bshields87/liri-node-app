 require("dotenv").config();


var axios = require("axios");

/*var action= process.argv[2];
var artist= process.argv[3];
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
  function(response){
    console.log(response.data);
  });


  var movieTitle= process.argv[3];
  axios.get("http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=trilogy").then(
  function(response) {
    console.log(response);
  }
  );*/

var fs= require("fs");
fs.readFile("random.txt","utf8", function(error, data){
  if (error){
    return console.log(error);
  }
  console.log(data);
  var dataArr = data.split(",");
  console.log(dataArr);
});