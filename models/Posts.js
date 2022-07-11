const mongoose = require("mongoose");

const Posts = mongoose.model("Posts", {
  title: String,
  body: String,
});

module.exports = Posts;
