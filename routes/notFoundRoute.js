const router = require("express").Router();

// Handler 404 for specific route
router.get("/persons/*", (req, res) => {
  res.send("Person not found");
});

router.get("/posts/*", (req, res) => {
  res.send("Posts not found");
});

router.get("/comments/*", (req, res) => {
  res.send("Comments not found");
});

router.get("/photos/*", (req, res) => {
  res.send("Photos not found");
});

router.get("/albums/*", (req, res) => {
  res.send("Albums not found");
});

// Handler 404
router.get("*", (req, res) => {
  res.send("Página não encontrada");
});

module.exports = router;
