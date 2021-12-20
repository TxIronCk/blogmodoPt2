const express = require("express");
const bodyParser = require("body-parser");

const Blogs = require("../database-mongodb/Blog.js");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + "/../react-client/dist"));

app.get("/api/blogs", function (req, res) {
  //this should use the method created by the database to bring forth messages queried
  //as well as other methods deeper into this Sprint to take care of the queries.

  res.json();
  res.end();
});

app.post("/api/blogs", function (req, res) {});
// This should use methods created in the jsx files or database files to take client posts from the browser and send them to the database to be 'created'/saved to the database
//It should contain an error first callback

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
