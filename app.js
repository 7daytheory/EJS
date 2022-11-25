const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();

app.get("/", (req, res) => {
  var today = new Date();
  var day = today.getDay();
  if(day === 7 || day === 0) // Sat is 7 - Sunday is 0
  {
    res.sendFile(__dirname + '/weekend.html');
  } else {
    res.sendFile(__dirname + '/weekday.html');
  }
})

app.listen(port, () => {
    console.log("Server started on port " + port);
})
