const router = require('express').Router();
const mercadoPagoCheckout = require('../controllers/payments/mercadoPagoCheckout')

// GET mercadopago/checkout/:id/:email/:description/:amount
// GET mercadopago/success
// GET mercadopago/pending
// GET mercadopago/failure

router.get('/checkout/:id/:email/:description/:amount', mercadoPagoCheckout)

router.get('/success', mercadoPagoCheckout)

router.get('/pending', mercadoPagoCheckout)

router.get('/failure', mercadoPagoCheckout)

module.exports = router;