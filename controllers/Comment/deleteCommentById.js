const Comments = require("../../models/Comments");

async function deleteCommentById(req, res) {
  try {
    const id = req.params.id;
    const commentToBeDeleted = await Comments.deleteOne({ _id: id });
    res.status(201).json({
      ...commentToBeDeleted,
      message: "the id was succesfully deleted",
    });
  } catch (error) {
    return res.status(422).json({ error: error });
    // throw new Error('Error ', error);
  }
}

module.exports = deleteCommentById;
