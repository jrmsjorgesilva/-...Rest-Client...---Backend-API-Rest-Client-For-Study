const router = require("express").Router();
const pagSeguroCheckout = require("../../controllers/payments/pagSeguroCheckout");

router.get("/", pagSeguroCheckout);

module.exports = router;
