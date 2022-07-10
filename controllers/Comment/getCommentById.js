const Comments = require("../../models/Comments");

async function getCommentById(req, res) {
  try {
    const id = req.params.id;
    const commentReceived = await Comments.findOne({ _id: id });
    return res.status(201).json(commentReceived);
  } catch (error) {
    return res.status(422).json({ error: error });
    // throw new Error('Error', error);
  }
}

module.exports = getCommentById;
