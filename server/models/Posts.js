const mongoose = require("mongoose");

const Posts = mongoose.model("Posts", {
  id: number,
  userId: number,
  title: string,
  body: string,
});

module.exports = Posts;
