const Posts = require("../../models/Posts");

async function patchPostById(req, res) {
  // todo
  try {
    const id = req.params.id;
    const { title, body } = req.body;
    const updatedPost = { title, body };
    await Posts.updateOne({ _id: id }, updatedPost);
    res.status(201).json(updatedPost);
  } catch (error) {
    return res.status(422).json({ error: error });
  }
}

module.exports = patchPostById;
