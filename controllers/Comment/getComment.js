const Comments = require("../../models/Comments");

async function getComment(req, res) {
  try {
    const commentsReceived = await Comments.find();
    return res.status(201).json(commentsReceived);
  } catch (error) {
    return res.status(422).json({ error: error });
    // throw new Error("Error ", error);
  }
}

module.exports = getComment;
