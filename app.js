const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  var today = new Date();
  var day = today.getDay();
  let currentDay = "";

  switch(day) {
    case 0:
      currentDay = "Sunday";
    break;
    case 1:
      currentDay = "Monday"
    break;
    case 2:
      currentDay = "Tuesday";
    break;
    case 3:
      currentDay = "Wednesday";
    break;
    case 4:
      currentDay = "Thursday";
    break;
    case 5:
      currentDay = "Friday";
    break;
    case 6:
      currentDay = "Saturday";
    break;
    default:
      currentDay = "Cannot find day";
      console.log("Error: Day value cannot be found");
  }

  res.render('players', 
  {
    currentDay: currentDay
  });
})

app.listen(port, () => {
    console.log("Server started on port " + port);
})
