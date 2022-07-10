const mongoose = require("mongoose");

const Comments = mongoose.model("Comments", {
  postId: Number,
  id: Number,
  name: String,
  email: String,
  body: String,
});

module.exports = Comments;
