const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("./pages/forgot-password", {
    title: "Forgot Your Password?",
  });
});

module.exports = router;
