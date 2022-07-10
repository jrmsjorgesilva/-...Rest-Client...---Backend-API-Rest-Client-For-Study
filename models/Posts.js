const mongoose = require("mongoose");

const Posts = mongoose.model("Posts", {
  id: Number,
  userId: Number,
  title: String,
  body: String,
});

module.exports = Posts;
