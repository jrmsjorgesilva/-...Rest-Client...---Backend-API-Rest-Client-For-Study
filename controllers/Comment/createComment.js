const Comments = require("../../models/Comments");

async function createComment(req, res) {
  const { name, email, body } = req.body;

  const commentToPost = {
    name,
    email,
    body,
  };

  try {
    await Comments.create(commentToPost);
    return res.status(201).json(commentToPost);
  } catch (error) {
    res.status(422).json({ error: error });
    throw new Error("Error ", error);
  }
}

module.exports = createComment;
