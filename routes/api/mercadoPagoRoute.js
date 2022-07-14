require("dotenv").config();
const router = require("express").Router();
const mercadoPagoCheckout = require("../../controllers/payments/mercadoPagoCheckout");
const mercadopago = require("mercadopago");
const axios = require('axios');

console.log(mercadopago.payments);


router.get("/checkout/:id/:email/:description/:amount", mercadoPagoCheckout);

router.get("/success", (req, res) => {
  return res.render("success_screen");
});

router.get("/pending", (req, res) => {
  return res.render("pending_screen");
});

router.get("/failure", (req, res) => {
  return res.render("failure_screen");
});

module.exports = router;
