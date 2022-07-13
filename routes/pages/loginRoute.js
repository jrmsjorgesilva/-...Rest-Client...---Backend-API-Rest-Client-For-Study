const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("./pages/login", {
    title: "Enter Your Account",
  });
});

module.exports = router;
