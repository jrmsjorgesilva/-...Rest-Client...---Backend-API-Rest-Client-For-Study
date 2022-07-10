const router = require("express").Router();
const Posts = require("../models/Posts");

router.post("/", async (req, res) => {
  // todo
  const { id, userId, title, body } = req.body;

  const postToPost = {
    id,
    userId,
    title,
    body,
  };

  try {
    await Posts.create(postToPost);
    return res.status(201).json(commentToPost);
  } catch (error) {
    res.status(422).json({ error: error });
    throw new Error("Error ", error);
  }
});

router.get("/", async (req, res) => {
  // todo
  try {
    const postsReceived = await Posts.find();
    return res.status(201).json(postsReceived);
  } catch (error) {
    res.status(422).json({ error: error });
    throw new Error("Error ", error);
  }
});

router.get("/:id", async (req, res) => {
  // todo
});

router.patch("/:id", async (req, res) => {
  // todo
});

router.delete("/:id", async (req, res) => {
  // todo
});

module.exports = router;
