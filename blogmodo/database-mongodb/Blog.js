const mongoose = require("mongoose");
const db = require("./index.js");

const blogSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    imageUrl: String,
    body: String,
    views: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);

//This should be a method that will recieve the information from the server and create/save that data to the database.
//It should contain an error first callback

//This should be a method that 'finds' a blogger to send just that blogger's details/blog
//It should contain an error first callback

module.exports = Blog;
