const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  const today = new Date();
 
  const options = { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  };

  const currentDay = today.toLocaleDateString("en-US", options);

  res.render('lists', 
  {
    currentDay: currentDay
  });
})

app.listen(port, () => {
    console.log("Server started on port " + port);
})
