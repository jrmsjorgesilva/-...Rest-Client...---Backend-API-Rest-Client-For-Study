const mongoose = require("mongoose");

const Comments = mongoose.model("Comments", {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
});

module.exports = Comments;
