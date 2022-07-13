router = require("express").Router();

router.get("/", (req, res) => {
  res.render("./pages/tables", {
    title: "Items Listados",
  });
});

// id reveals the items to be listed
router.get("/:id", (req, res) => {
  res.render("./pages/tables", {
    title: req.params.id,
  });
});

module.exports = router;
