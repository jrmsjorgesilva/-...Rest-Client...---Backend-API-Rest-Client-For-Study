const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("./pages/cancel", {
    title: "article title",
  });
});

module.exports = router;
