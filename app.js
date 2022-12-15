const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  var today = new Date();
  var day = today.getDay();
  let currentDay = "";
  if(day === 7 || day === 0) // Sat is 7 - Sunday is 0
  {
    currentDay = "Weekend";
    res.render('players', {dayValue: currentDay});
  } else {
    currentDay = "Weekday";
    res.render('players', {dayValue: currentDay});
  }
})

app.listen(port, () => {
    console.log("Server started on port " + port);
})
