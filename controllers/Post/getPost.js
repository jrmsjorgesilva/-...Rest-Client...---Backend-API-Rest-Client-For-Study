const Posts = require("../../models/Posts");

async function getPost(req, res) {
  // todo
  try {
    const postsReceived = await Posts.find();
    return res.status(201).json(postsReceived);
  } catch (error) {
    res.status(422).json({ error: error });
    throw new Error("Error ", error);
  }
}

module.exports = getPost;
