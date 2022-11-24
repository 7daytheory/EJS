const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();

app.get("/", (req, res) => {
  var today = new Date();
  if(today.getDay() === 7 || today.getDay() === 7) // Sat is 7 - Sunday is 0
  {
    res.send("No! It's a weekend");
  } else {
    res.send("Its a weekend!");
  }
})

app.listen(port, () => {
    console.log("Server started on port " + port);
})
