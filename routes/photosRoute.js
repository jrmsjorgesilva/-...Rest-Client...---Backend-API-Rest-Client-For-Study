const router = require("express").Router();

router.post("/", async (req, res) => {
  res.send("some photos");
});

router.get("/", async (req, res) => {
  res.send("some photos");
});

router.get("/:id", async (req, res) => {
  res.send("some photos");
});

router.patch("/:id", async (req, res) => {
  res.send("some photos");
});

router.delete("/:id", async (req, res) => {
  res.send("some photos");
});

module.exports = router;
