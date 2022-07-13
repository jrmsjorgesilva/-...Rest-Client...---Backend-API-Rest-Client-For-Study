const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("./pages/about", {
    title: "About Our Services",
  });
});

module.exports = router;
