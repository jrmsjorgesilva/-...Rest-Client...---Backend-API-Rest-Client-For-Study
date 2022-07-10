const router = require("express").Router();
const Comments = require('../models/Comments');

router.post("/", async (req, res) => {
  // todo
  const { postId, id, name, email, body } = req.body;

  const commentToPost = {
    postId,
    id,
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
});

router.get("/", async (req, res) => {
  // todo
  try {
    const commentsReceived = await Comments.find();
    return res.status(201).json(commentsReceived);
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
