const Posts = require("../../models/Posts");

async function createPost(req, res) {
  // todo
  const { title, body } = req.body;

  const postToPost = {
    title,
    body,
  };

  try {
    await Posts.create(postToPost);
    return res.status(201).json(postToPost);
  } catch (error) {
    return res.status(422).json({ error: error });
    // throw new Error("Error ", error);
  }
}

module.exports = createPost;
