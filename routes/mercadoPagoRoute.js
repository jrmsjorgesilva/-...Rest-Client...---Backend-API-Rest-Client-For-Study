const router = require('express').Router();
const mercadoPagoCheckout = require('../controllers/payments/mercadoPagoCheckout')

router.get('/checkout/:id/:email/:description/:amount', mercadoPagoCheckout)

router.get('/success', mercadoPagoCheckout)

router.get('/pending', mercadoPagoCheckout)

router.get('/failure', mercadoPagoCheckout)

module.exports = router;