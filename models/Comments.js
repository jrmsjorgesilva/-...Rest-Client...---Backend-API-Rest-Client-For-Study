const mongoose = require("mongoose");

const Comments = mongoose.model("Comments", {
  name: String,
  email: String,
  body: String,
});

module.exports = Comments;
