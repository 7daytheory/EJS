const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();

let item = "";
let items = ["List item 1", "List item 2", "List item 3"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  const today = new Date();
 
  const options = { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  };

  const currentDay = today.toLocaleDateString("en-US", options);

  res.render("list", 
  {
    currentDay: currentDay,
    newlistItem: items
  });
})

app.post("/", (req, res) => {
  item = req.body.newItem;
  items.push(item);

  res.redirect("/");
})

app.listen(port, () => {
    console.log("Server started on port " + port);
})
