const express = require("express");
const bodyParser = require("body-parser");

const Blogs = require("../database-mongodb/Blog.js");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// UNCOMMENT FOR REACT
// app.use(express.static(__dirname + '/../react-client/dist'));

app.get("/api/blogs", function (req, res) {
  // TODO - your code here!
});

// TODO - add any other routes you need here.

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
