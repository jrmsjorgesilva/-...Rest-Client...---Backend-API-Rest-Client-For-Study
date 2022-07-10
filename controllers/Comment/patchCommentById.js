const Comments = require("../../models/Comments");

async function patchCommentById(req, res) {
  try {
    const id = req.params.id;
    const { name, email, body } = req.body;
    const commentToUpdate = { name, email, body };
    await Comments.updateOne({ _id: id }, commentToUpdate);
    res.status(200).json(commentToUpdate);
  } catch (error) {
    return res.status(422).json({ error: error });
    // throw new Error('Error ', error);
  }
}

module.exports = patchCommentById;
