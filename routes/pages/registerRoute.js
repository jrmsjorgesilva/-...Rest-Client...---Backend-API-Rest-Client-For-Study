const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("./pages/register", {
    title: "Register Your Account",
  });
});

module.exports = router;
