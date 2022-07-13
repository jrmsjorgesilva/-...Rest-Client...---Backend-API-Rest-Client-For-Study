require("dotenv").config();
const router = require("express").Router();
const mercadoPagoCheckout = require("../../controllers/payments/mercadoPagoCheckout");
const mercadopago = require("mercadopago");

router.get("/", async (req, res) => {
  mercadopago.configure({
    access_token: process.env.MERCADOPAGO_ACCESS_TOKEN,
  });

  const preference = {
    items: [
      {
        title: "Test",
        quantity: 1,
        currency_id: "ARS",
        unit_price: 10.5,
      },
    ],
  };
  try {
    await mercadopago.preferences.create(preference);
  } catch (err) {
    return res.send(err.message);
  }

});

// router.get("/checkout/:id/:email/:description/:amount", mercadoPagoCheckout);

// router.get("/success", mercadoPagoCheckout);

// router.get("/pending", mercadoPagoCheckout);

// router.get("/failure", mercadoPagoCheckout);

module.exports = router;
