const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("./pages/success", {
    title: "Success!",
  });
});

module.exports = router;
