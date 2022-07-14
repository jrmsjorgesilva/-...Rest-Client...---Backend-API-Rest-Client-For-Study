require("dotenv").config();
const router = require("express").Router();
const mercadoPagoCheckout = require("../../controllers/payments/mercadoPagoCheckout");
const mercadopago = require("mercadopago");

// router.post("/:id/:email/:description/:amount", async (req, res) => {
//   mercadopago.configure({
//     access_token: process.env.MERCADOPAGO_ACCESS_TOKEN,
//   });

//   const preference = {
//     items: [
//       {
//         title: "Test",
//         quantity: 1,
//         currency_id: "ARS",
//         unit_price: 10.5,
//       },
//     ],
//   };
//   try {
//     await mercadopago.preferences.create(preference);
//   } catch (err) {
//     return res.send(err.message);
//   }
// });

router.get("/checkout/:id/:email/:description/:amount", mercadoPagoCheckout);

router.get("/success", (req, res) => {
  return res.render('success_screen')
});

router.get("/pending", (req, res) => {
  return res.render('pending_screen')
});

router.get("/failure", (req, res) => {
  return res.render('failure_screen')
});

module.exports = router;
