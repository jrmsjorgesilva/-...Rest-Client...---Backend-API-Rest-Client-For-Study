const Posts = require("../../models/Posts");

async function deletePostById(req, res) {
  // todo
  try {
    const id = req.params.id;
    await Posts.deleteOne({ _id: id });
    return res
      .status(201)
      .json({ message: `The id ${id} was deleted succesfully` });
  } catch (error) {
    return res.status(422).json({ error: error });
  }
}

module.exports = deletePostById;
