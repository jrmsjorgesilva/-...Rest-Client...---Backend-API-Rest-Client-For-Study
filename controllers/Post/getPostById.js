const Posts = require("../../models/Posts");

async function getPostById(req, res) {
  // todo
  try {
    const id = req.params.id;
    const postReceived = await Posts.findOne({ _id: id });
    return res.status(201).json(postReceived);
  } catch (error) {
    return res.status(422).json({ error: error });
    // throw new Error('Error ', error);
  }
}

module.exports = getPostById;
