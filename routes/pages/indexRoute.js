require('dotenv').config();
const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Dashboard",
    clientId: process.env.PAYPAL_CLIENT_ID,
  });
});

module.exports = router;
